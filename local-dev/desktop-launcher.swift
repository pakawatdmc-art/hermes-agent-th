import AppKit

// Keep the checkout's isolated profile and PM environment.
final class Launcher: NSObject, NSApplicationDelegate {
    private var tasks: [Process] = []

    func applicationDidFinishLaunching(_ notification: Notification) {
        launchHermes()
    }

    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows: Bool) -> Bool {
        launchHermes()
        return true
    }

    private func launchHermes() {
        guard let path = Bundle.main.object(forInfoDictionaryKey: "HermesWorkspacePath") as? String else {
            showError("ไม่พบตำแหน่งโปรเจกต์ Hermes ในตัวเปิดแอป")
            return
        }
        let root = URL(fileURLWithPath: path, isDirectory: true)
        let command = root.appendingPathComponent("dev")
        guard FileManager.default.isExecutableFile(atPath: command.path) else {
            showError("ไม่พบโปรเจกต์ที่ \(path)\nหากย้ายโฟลเดอร์โปรเจกต์ ต้องติดตั้งตัวเปิดแอปใหม่")
            return
        }
        do {
            let logs = root.appendingPathComponent(".hermes-dev/logs")
            try FileManager.default.createDirectory(at: logs, withIntermediateDirectories: true,
                                                    attributes: [.posixPermissions: 0o700])
            let log = logs.appendingPathComponent("desktop-launcher.log")
            if !FileManager.default.fileExists(atPath: log.path) {
                FileManager.default.createFile(atPath: log.path, contents: nil,
                                              attributes: [.posixPermissions: 0o600])
            }
            let output = try FileHandle(forWritingTo: log)
            try output.seekToEnd()
            let task = Process()
            task.executableURL = URL(fileURLWithPath: "/bin/bash")
            task.arguments = [command.path, "desktop"]
            task.currentDirectoryURL = root
            var environment = ProcessInfo.processInfo.environment
            environment["PATH"] = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
            task.environment = environment
            task.standardInput = FileHandle.nullDevice
            task.standardOutput = output
            task.standardError = output
            task.terminationHandler = { finished in
                output.closeFile()
                DispatchQueue.main.async {
                    self.tasks.removeAll { $0 === finished }
                    if finished.terminationStatus != 0 {
                        self.showError("เปิด Hermes ไม่สำเร็จ ดูรายละเอียดที่\n\(log.path)")
                    } else if self.tasks.isEmpty {
                        NSApp.terminate(nil)
                    }
                }
            }
            tasks.append(task)
            try task.run()
        } catch {
            showError("เปิด Hermes ไม่สำเร็จ: \(error.localizedDescription)")
        }
    }

    private func showError(_ message: String) {
        NSApp.activate(ignoringOtherApps: true)
        let alert = NSAlert()
        alert.messageText = "Hermes ภาษาไทย"
        alert.informativeText = message
        alert.addButton(withTitle: "ตกลง")
        alert.runModal()
        NSApp.terminate(nil)
    }
}

let app = NSApplication.shared
let launcher = Launcher()
app.delegate = launcher
app.setActivationPolicy(.accessory)
app.run()
