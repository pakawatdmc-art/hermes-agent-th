// Thai settings copy reviewed against the English catalog.
import { TH_FIELD_DESCRIPTIONS, TH_FIELD_LABELS } from './th_field_copy'
import { thGatewayHost } from './th_gateway_host'
import { thLocalModels } from './th_local_models'
import { thMemoryLayers } from './th_memory_layers'
import { thModelSettings } from './th_model_settings'
import { thNotifications } from './th_notifications'
import { thUninstallSection } from './th_uninstall_section'
import { thUpdateChannel } from './th_update_channel'
import type { Translations } from './types'

export const thSettingsCopy = {
  settings: {
    subpages: {
      appearanceTheme: 'ธีม',
      appearanceTypography: 'ตัวอักษรและขนาดข้อความ',
      appearanceWindowLayout: 'หน้าต่างและเค้าโครง',
      appearanceChatDisplay: 'การแสดงแชต',
      appearancePet: 'สัตว์เลี้ยง',
      appearanceGeneral: 'ทั่วไป',
      modelMain: 'โมเดลหลัก',
      modelAuxiliary: 'โมเดลเสริม',
      modelMoa: 'การทำงานร่วมกันของเอเจนต์ (MoA)',
      modelFallbacks: 'โมเดลสำรอง',
      chatBehavior: 'พฤติกรรม',
      chatAttachments: 'ไฟล์แนบ',
      workspaceProjects: 'โปรเจกต์และการค้นหา',
      workspaceShell: 'สภาพแวดล้อมของเชลล์',
      workspaceFiles: 'ไฟล์และการดำเนินการ',
      safetyApprovals: 'การอนุญาต',
      safetyPrivacy: 'ความเป็นส่วนตัวและเครือข่าย',
      safetyCheckpoints: 'จุดคืนค่า',
      browserProfile: 'โปรไฟล์เบราว์เซอร์',
      browserNetwork: 'URL ในเครื่องและเครือข่ายส่วนตัว',
      memoryPersistent: 'ความจำถาวร',
      memoryContext: 'บริบทและการย่อบริบท',
      voiceConversation: 'การสนทนาด้วยเสียง',
      voiceTranscription: 'แปลงเสียงเป็นข้อความ',
      voiceSpeech: 'แปลงข้อความเป็นเสียง',
      advancedRuntime: 'ขีดจำกัดเอเจนต์',
      advancedTools: 'การเข้าถึงเครื่องมือ',
      advancedTerminal: 'ระบบเทอร์มินัล',
      advancedOutput: 'ขีดจำกัดผลลัพธ์',
      advancedDelegation: 'เอเจนต์ย่อย',
      advancedDesktop: 'เดสก์ท็อปและการเริ่มต้น',
      gatewayConnection: 'หน้าต่างนี้',
      gatewayDevices: 'การเชื่อมต่อที่บันทึกไว้',
      gatewayManagedUpdates: 'การอัปเดตระยะไกล',
      gatewayManagedUpdatesUnavailable: 'การอัปเดตระยะไกลต้องใช้เดสก์ท็อปรุ่นที่รองรับการจัดการอัปเดตผ่าน SSH',
      gatewayManagedUpdatesEmpty: 'เพิ่มการเชื่อมต่อ SSH ในการเชื่อมต่อที่บันทึกไว้เพื่อจัดการการอัปเดตที่นี่',
      keyboardShortcuts: 'แป้นพิมพ์ลัด',
      hudGesture: 'ท่าทาง HUD',
      screenCapture: 'การจับภาพหน้าจอ',
      notificationAlerts: 'การแจ้งเตือนบนเดสก์ท็อป',
      notificationSounds: 'เสียง',
      archivedSessions: 'การเก็บถาวรและการเก็บรักษา',
      defaultDirectory: 'โฟลเดอร์โปรเจกต์เริ่มต้น',
      vaultCredentials: 'ข้อมูลเข้าสู่ระบบที่บันทึกไว้',
      vaultSources: 'ตัวจัดการรหัสผ่าน',
      appUpdates: 'เวอร์ชันและการอัปเดต',
      uninstall: 'ถอนการติดตั้ง',
      billingOverview: 'ภาพรวม',
      billingPlans: 'แพ็กเกจ'
    },
    closeSettings: 'ปิดการตั้งค่า',
    exportConfig: 'ส่งออกการตั้งค่า',
    importConfig: 'นำเข้าการตั้งค่า',
    resetToDefaults: 'รีเซ็ตเป็นค่าเริ่มต้น',
    resetConfirm: 'รีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้นของ Hermes หรือไม่',
    exportFailed: 'การส่งออกล้มเหลว',
    resetFailed: 'การรีเซ็ตล้มเหลว',
    pluginPages: {
      blurb: 'ตัวเลือกเพิ่มเติมจากปลั๊กอินที่ติดตั้ง แต่ละปลั๊กอินมีหน้าการตั้งค่าของตนเอง และอาจมีหน้าย่อยด้วย',
      empty: 'ยังไม่มีปลั๊กอินที่มีหน้าการตั้งค่า',
      manage: 'จัดการปลั๊กอิน',
      agentSettings: 'การตั้งค่าเอเจนต์',
      pageCount: (n: number) => `${n} หน้า`,
      missing: 'ปลั๊กอินนี้ไม่มีหน้าการตั้งค่า อาจถูกปิดใช้งานหรือถอนการติดตั้งแล้ว'
    },
    nav: {
      providers: 'ผู้ให้บริการโมเดล',
      providerAccounts: 'บัญชี',
      providerApiKeys: 'คีย์ API',
      providerCustomEndpoints: 'ปลายทางที่กำหนดเอง',
      providerLocalModels: 'โมเดลในเครื่อง',
      gateway: 'เกตเวย์',
      apiKeys: 'เครื่องมือและคีย์',
      keybinds: 'แป้นพิมพ์ลัด',
      keysTools: 'เครื่องมือ',
      keysSettings: 'การตั้งค่า',
      mcp: 'MCP',
      archivedChats: 'แชตที่เก็บถาวร',
      sessions: 'บทสนทนา',
      about: 'เกี่ยวกับ',
      billing: 'การเรียกเก็บเงิน',
      notifications: 'การแจ้งเตือน',
      vault: 'รหัสผ่านและการเข้าสู่ระบบ',
      plugins: 'ปลั๊กอิน'
    },
    plugins: {
      title: 'ปลั๊กอินเดสก์ท็อป',
      openFolder: 'เปิดโฟลเดอร์ปลั๊กอินเดสก์ท็อป',
      rescan: 'สแกนอีกครั้ง',
      reveal: 'แสดงในตัวจัดการไฟล์',
      enable: 'เปิดใช้งาน',
      disable: 'ปิดใช้งาน',
      failed: 'ล้มเหลว',
      kinds: { bundled: 'มาพร้อมแอป', disk: 'บนดิสก์', runtime: 'รันไทม์' },
      installModal: {
        installFromGit: 'ติดตั้งจาก Git',
        reviewRepository: 'ตรวจสอบคลังโค้ด',
        repoPlaceholder: 'https://github.com/owner/repo',
        title: 'ติดตั้งปลั๊กอิน',
        description: 'ตรวจสอบว่าคลังโค้ดนี้มีอะไรบ้างก่อนติดตั้ง',
        repoLabel: 'คลังโค้ด',
        verified: 'ตรวจสอบแล้ว',
        unverified: 'ไม่ได้รับการยืนยัน',
        reviewedByNous: 'ตรวจสอบโดย Nous',
        installsAndEnables: profile => `ติดตั้งสำหรับ ${profile} และเปิดใช้งานทันที`,
        installsOnly: profile => `ติดตั้งสำหรับ ${profile}`,
        advanced: 'ขั้นสูง',
        versionLabel: 'เวอร์ชัน',
        reviewedPin: sha => (sha ? `คอมมิตที่ตรวจสอบแล้ว ${sha}` : 'คอมมิตที่ตรวจสอบแล้ว'),
        latestCommit: 'คอมมิตล่าสุด',
        sourceMoved: sha =>
          sha
            ? `คลังโค้ดเปลี่ยนไปหลังจากที่คุณตรวจสอบ กรุณาตรวจสอบเวอร์ชันใหม่ (คอมมิต ${sha}) ก่อนติดตั้ง`
            : 'คลังโค้ดเปลี่ยนไปหลังจากที่คุณตรวจสอบ กำลังอ่านเวอร์ชันใหม่…',
        legacyBackendConfirm:
          'แบ็กเอนด์รุ่นนี้เก่ากว่าแอป จึงรับประกันไม่ได้ว่าจะติดตั้งเวอร์ชันที่คุณตรวจสอบ หากคลังโค้ดเปลี่ยนไป ระบบจะติดตั้งเวอร์ชันใหม่กว่าแทน อัปเดตแบ็กเอนด์เพื่อให้ติดตั้งตรงตามเวอร์ชันที่ตรวจสอบ',
        installAnyway: 'ติดตั้งต่อไป',
        partialInstall: sha =>
          sha
            ? `ติดตั้งปลั๊กอินได้เพียงบางส่วน: ส่วนเอเจนต์อยู่ที่คอมมิต ${sha} แต่ติดตั้งส่วนเดสก์ท็อปต่อไม่ได้ เพราะคลังโค้ดเปลี่ยนไปหลังการตรวจสอบ เปิด “บังคับติดตั้งใหม่” ในขั้นสูงเพื่อแทนที่ทั้งสองส่วนด้วยเวอร์ชันที่แสดง หรือยกเลิกเพื่อเก็บเฉพาะส่วนเอเจนต์`
            : 'ติดตั้งปลั๊กอินได้เพียงบางส่วน: ติดตั้งส่วนเอเจนต์แล้ว แต่ติดตั้งส่วนเดสก์ท็อปต่อไม่ได้ เพราะคลังโค้ดเปลี่ยนไปหลังการตรวจสอบ เปิด “บังคับติดตั้งใหม่” ในขั้นสูงเพื่อแทนที่ทั้งสองส่วนด้วยเวอร์ชันที่แสดง หรือยกเลิกเพื่อเก็บเฉพาะส่วนเอเจนต์',
        nothingToInstall: 'แพ็กเกจนี้ไม่มีอะไรจะติดตั้งที่นี่',
        includesHeading: 'แพ็กเกจนี้ประกอบด้วย',
        agentLabel: 'ปลั๊กอินเอเจนต์',
        desktopLabel: 'ส่วนติดต่อเดสก์ท็อป',
        profileLabel: 'ติดตั้งสำหรับโปรไฟล์',
        agentTargetLocal: (profile, dir) => `ติดตั้งลงในแบ็กเอนด์ ${profile} (${dir})`,
        agentTargetRemote: profile => `ติดตั้งลงในแบ็กเอนด์ ${profile} ที่เชื่อมต่ออยู่`,
        toolsConnected: n => (n === 1 ? 'เชื่อมต่อ 1 เครื่องมือแล้ว' : `เชื่อมต่อ ${n} เครื่องมือแล้ว`),
        skillsReady: names =>
          names.length === 1 ? `ทักษะ ${names[0]} พร้อมแล้ว` : `ทักษะ ${names.length} รายการพร้อมแล้ว`,
        nextChat: 'เครื่องมือเพิ่มเติมจะพร้อมใช้ในแชตถัดไปของคุณ',
        serverNotConnected: (server, reason) =>
          `เซิร์ฟเวอร์ MCP ${server} ยังไม่ได้เชื่อมต่อ${reason ? `: ${reason}` : '.'}`,
        missingEnvAction: 'ตั้งค่า',
        alreadyInstalled: (name: string) => `${name} ได้รับการติดตั้งแล้ว`,
        desktopTarget: 'ติดตั้งในโฟลเดอร์ปลั๊กอินเดสก์ท็อปของแอปบนเครื่องนี้',
        desktopTargetFromPackage: 'โหลดเข้าแอปนี้จากแพ็กเกจด้านบน — ใช้ร่วมกันทุกโปรไฟล์',
        desktopOnlyNote: 'แพ็กเกจที่มีเฉพาะส่วนเดสก์ท็อปจะไม่ติดตั้งปลั๊กอินเอเจนต์บนแบ็กเอนด์',
        insecureWarning:
          'URL นี้ใช้รูปแบบที่ไม่ปลอดภัยหรืออ้างอิงไฟล์ในเครื่อง แนะนำ https:// หรือ git@ สำหรับการติดตั้งเพื่อใช้งานจริง',
        securityIntro:
          'ติดตั้งจากแหล่งที่คุณเชื่อถือเท่านั้น — ตรวจสอบคลังโค้ดด้านล่างหากคุณต้องการดูว่าจะเพิ่มอะไรบ้าง',
        sourceHeading: 'ซอร์สโค้ด',
        viewRepository: 'ดูคลังโค้ด',
        viewPluginFiles: 'ดูไฟล์ปลั๊กอิน',
        enableAgent: 'เปิดใช้งานปลั๊กอินเอเจนต์หลังการติดตั้ง',
        forceReinstall: 'บังคับติดตั้งใหม่ (แทนที่หากติดตั้งแล้ว)',
        pinToCommit: 'ตรึงเวอร์ชันตามคอมมิต (ไม่บังคับ)',
        pinToCommitPlaceholder: 'SHA ของคอมมิตแบบเต็ม 40 อักขระ',
        pinToCommitHint:
          'ทุกคนที่ติดตั้ง SHA นี้จะได้รับโค้ดเดียวกัน จากนั้นปลั๊กอินจะไม่รับการอัปเดตจนกว่าจะเปลี่ยนคอมมิตที่ตรึงไว้ เว้นว่างเพื่อใช้คอมมิตล่าสุด',
        pinToCommitInvalid: 'ต้องเป็น SHA เต็ม 40 อักขระ (ไม่รับชื่อบรานช์หรือแท็ก)',
        install: 'ติดตั้ง',
        installing: 'กำลังติดตั้ง…',
        probing: 'กำลังตรวจสอบคลังโค้ด...',
        probeUnavailable: 'การตรวจสอบปลั๊กอินไม่พร้อมใช้งานในสภาพแวดล้อมนี้',
        desktopUnavailable: 'ติดตั้งปลั๊กอินเดสก์ท็อปไม่ได้ในสภาพแวดล้อมนี้',
        selectComponent: 'เลือกอย่างน้อยหนึ่งองค์ประกอบที่จะติดตั้ง',
        agentSuccess: name => `ติดตั้งปลั๊กอินเอเจนต์ ${name} แล้ว`,
        desktopSuccess: name => `ติดตั้งปลั๊กอินเดสก์ท็อป ${name} แล้ว`,
        agentFailed: 'ติดตั้งปลั๊กอินเอเจนต์ไม่สำเร็จ',
        installUncertain:
          'Hermes หยุดรอผลแล้ว แต่การติดตั้งปลั๊กอินอาจยังดำเนินอยู่ ปิดกล่องนี้แล้วกด “สแกนอีกครั้ง” ในหน้าปลั๊กอินก่อนลองติดตั้งซ้ำ',
        desktopFailed: 'ติดตั้งปลั๊กอินเดสก์ท็อปไม่สำเร็จ',
        missingEnv: (name, vars) =>
          `ติดตั้ง ${name} แล้ว แต่ต้องมีคีย์เหล่านี้จึงจะทำงานได้: ${vars} เพิ่มคีย์ก่อนใช้งาน มิฉะนั้นเครื่องมือของปลั๊กอินจะล้มเหลว`
      }
    },
    vault: {
      title: 'รหัสผ่านและการเข้าสู่ระบบ',
      blurb:
        'บอกว่า “เข้าสู่ระบบ GitHub” แล้วให้เอเจนต์ดำเนินการให้ เมื่อพบหน้าเข้าสู่ระบบครั้งแรก ระบบจะขอข้อมูลจากคุณและบันทึกไว้ใช้ครั้งต่อไป รหัสผ่านถูกเข้ารหัสในเครื่องนี้และกรอกลงเว็บไซต์โดยตรง โดยโมเดลไม่เห็นรหัสผ่าน',
      count: n => `บันทึกไว้ ${n} รายการ`,
      loadFailed: 'โหลดข้อมูลที่เก็บไว้อย่างปลอดภัยไม่ได้',
      empty: 'ยังไม่ได้บันทึกอะไรเลย',
      emptyDesc:
        'ไม่จำเป็นต้องเพิ่มข้อมูลที่นี่ล่วงหน้า ขอให้เอเจนต์เข้าสู่ระบบเว็บไซต์ แล้วเอเจนต์จะขอข้อมูลเมื่อจำเป็น หรือเลือก “เพิ่ม” หากต้องการบันทึกไว้ก่อน',
      add: 'เพิ่ม',
      addTitle: 'เพิ่มข้อมูลเข้าสู่ระบบ บัตร หรือที่อยู่',
      addDescription: 'เข้ารหัสและเก็บในเครื่องนี้ โดยเอเจนต์ไม่เห็นรหัสผ่าน',
      added: 'บันทึกแล้ว',
      adding: 'กำลังบันทึก...',
      addConfirm: 'บันทึก',
      kindField: 'ชนิด',
      kinds: { login: 'ข้อมูลเข้าสู่ระบบ', payment: 'บัตรชำระเงิน', address: 'ที่อยู่' },
      labelField: 'ป้ายกำกับ',
      labelPlaceholder: 'เช่น บัญชี GitHub สำหรับงาน',
      labelRequired: 'ต้องมีป้ายกำกับ',
      originField: 'ที่อยู่เว็บไซต์',
      originPlaceholder: 'https://github.com',
      originPlaceholderCheckout: 'https://shop.example.com',
      originInvalid: 'ป้อน URL ที่ถูกต้อง เช่น https://example.com.',
      identifierTypeField: 'ประเภทตัวระบุ',
      identifierTypes: { email: 'อีเมล', phone: 'โทรศัพท์', username: 'ชื่อผู้ใช้' },
      identifierField: 'ตัวระบุ',
      identifierShown: identifier => identifier,
      passwordField: 'รหัสผ่าน',
      loginFieldsRequired: 'ต้องระบุข้อมูลบัญชีและรหัสผ่าน',
      cardNumberField: 'หมายเลขบัตร',
      cardNameField: 'ชื่อบนบัตร',
      expMonthField: 'เดือนหมดอายุ',
      expYearField: 'ปีหมดอายุ',
      cvcField: 'CVC',
      postalField: 'รหัสไปรษณีย์',
      addressLine1Field: 'ที่อยู่บรรทัดที่ 1',
      addressLine2Field: 'ที่อยู่บรรทัดที่ 2',
      cityField: 'เมือง',
      stateField: 'รัฐ/ภูมิภาค',
      countryField: 'ประเทศ',
      optional: '(ไม่บังคับ)',
      createdOn: date => `เพิ่มเมื่อ ${date}`,
      deleteAction: 'ลบรายการที่บันทึกไว้',
      otpField: 'คีย์สำหรับแอปยืนยันตัวตน',
      otpPlaceholder: 'คีย์ลับแบบ Base32 หรือลิงก์ otpauth://',
      otpHint: '“คีย์การตั้งค่า” ที่เว็บไซต์แสดงเมื่อเปิดใช้ 2FA เมื่อบันทึกแล้ว Hermes จะสร้างรหัสยืนยันให้เอง',
      twoFactorBadge: '2FA อัตโนมัติ',
      deleteTitle: 'ลบรายการนี้ใช่ไหม',
      deleteDescription: label => `จะลบ “${label}” ออกอย่างถาวร การดำเนินการนี้ย้อนกลับไม่ได้`,
      deleteConfirm: 'ลบ',
      sources: {
        title: 'ตัวจัดการรหัสผ่าน',
        blurb:
          'ระบบตรวจพบตัวจัดการรหัสผ่านที่ติดตั้งโดยอัตโนมัติ เอเจนต์จะขอให้ปลดล็อกเมื่อจำเป็นต้องเข้าสู่ระบบครั้งแรกของแต่ละบทสนทนา ระบบเก็บเพียงโทเคนเซสชันในหน่วยความจำ โดยเอเจนต์ไม่เห็นรหัสผ่านหลักหรือข้อมูลเข้าสู่ระบบของคุณ',
        toggleFailed: 'ไม่สามารถอัปเดตตัวจัดการรหัสผ่านได้',
        notInstalled: name =>
          `ยังตรวจไม่พบ ติดตั้งเครื่องมือบรรทัดคำสั่งของ ${name} และเข้าสู่ระบบ แล้ว Hermes จะตรวจพบโดยอัตโนมัติ`,
        disabledDesc: 'ตรวจพบแต่ถูกปิดสำหรับ Hermes',
        lockedDesc: 'ตรวจพบแล้ว เอเจนต์จะขอให้คุณปลดล็อกเมื่อจำเป็นต้องเข้าสู่ระบบ หรือคุณจะปลดล็อกตอนนี้ก็ได้',
        unlockedDesc: 'ปลดล็อกสำหรับบทสนทนานี้แล้ว ระบบจะล็อกอัตโนมัติเมื่อไม่ได้ใช้งาน 30 นาทีหรือเมื่อปิด Hermes',
        statusLocked: 'ล็อกแล้ว',
        statusNotDetected: 'ตรวจไม่พบ',
        statusOff: 'ปิด',
        statusUnlocked: 'ปลดล็อกแล้ว',
        unlock: 'ปลดล็อก',
        unlocking: 'กำลังปลดล็อก...',
        lock: 'ล็อก',
        unlocked: name => `ปลดล็อก ${name} สำหรับบทสนทนานี้แล้ว`,
        unlockTitle: name => `ปลดล็อก ${name}`,
        unlockDescription:
          'กรอกรหัสผ่านหลัก ระบบจะส่งให้ตัวจัดการรหัสผ่านในเครื่องแล้วทิ้งทันที โดยไม่จัดเก็บ บันทึกลงล็อก หรือแสดงให้เอเจนต์เห็น',
        masterPasswordPlaceholder: 'รหัสผ่านหลัก'
      }
    },
    notifications: thNotifications,
    sections: {
      model: 'โมเดล',
      chat: 'แชต',
      appearance: 'รูปลักษณ์',
      workspace: 'พื้นที่ทำงาน',
      safety: 'ความปลอดภัย',
      memory: 'ความจำและบริบท',
      voice: 'เสียง',
      advanced: 'ขั้นสูง'
    },
    searchPlaceholder: {
      about: 'เกี่ยวกับ Hermes Desktop',
      config: 'ค้นหาการตั้งค่า…',
      gateway: 'การเชื่อมต่อเกตเวย์…',
      keys: 'ค้นหาคีย์ API...',
      mcp: 'ค้นหาเซิร์ฟเวอร์ MCP...',
      sessions: 'ค้นหาบทสนทนาที่เก็บถาวร…'
    },
    modeOptions: {
      light: { label: 'สว่าง', description: 'หน้าตาแอปโทนสว่าง' },
      dark: { label: 'มืด', description: 'พื้นที่ทำงานที่ลดแสงจ้า' },
      system: { label: 'ตามระบบ', description: 'ใช้โหมดสีตามระบบปฏิบัติการ' }
    },
    appearance: {
      chatTextScaleTitle: 'ขนาดข้อความในแชต',
      chatTextScaleDesc:
        'ปรับขนาดข้อความในบทสนทนาและช่องเขียนข้อความเทียบกับขนาดส่วนติดต่อผู้ใช้ แถบด้านข้างและปุ่มควบคุมยังมีขนาดเดิม',
      title: 'รูปลักษณ์',
      intro: 'ใช้เฉพาะเดสก์ท็อป โหมดสีกำหนดความสว่าง ส่วนธีมกำหนดชุดสีและหน้าตาของแชต',
      colorMode: 'โหมดสี',
      colorModeDesc: 'เลือกโหมดคงที่หรือปล่อยให้ Hermes ทำตามการตั้งค่าระบบของคุณ',
      toolViewTitle: 'การแสดงการเรียกใช้เครื่องมือ',
      toolViewDesc: 'แบบสรุปซ่อนข้อมูลดิบของเครื่องมือ ส่วนแบบเทคนิคแสดงข้อมูลเข้าและผลลัพธ์ทั้งหมด',
      hideCodeDiffsTitle: 'ซ่อนรายละเอียดการแก้ไขโค้ด',
      hideCodeDiffsDesc: 'แสดงการแก้ไขไฟล์เป็นแถวเครื่องมือพร้อมจำนวนบรรทัดที่เพิ่มหรือลบ โดยไม่แสดงตัวโค้ด',
      hideThreadTimelineTitle: 'ซ่อนแถบไทม์ไลน์บทสนทนา',
      hideThreadTimelineDesc: 'ซ่อนแถบนำทางตามขอบด้านขวาของแต่ละการสนทนา',
      reasoningCollapsedTitle: 'ย่อส่วนกระบวนการคิดไว้เป็นค่าเริ่มต้น',
      reasoningCollapsedDesc: 'เก็บกระบวนการคิดที่ได้รับระหว่างตอบไว้ให้ดูได้ โดยขยายเฉพาะเมื่อคุณเปิด',
      uiScaleTitle: 'ขนาดส่วนติดต่อผู้ใช้',
      uiScaleDesc: (percent: number) =>
        `ปรับขนาดข้อความและปุ่มควบคุมทั้งแอป ใช้ Cmd/Ctrl ร่วมกับ +, - และ 0 ได้เช่นกัน ปัจจุบัน: ${percent}%`,
      sessionDensityTitle: 'ความหนาแน่นของรายการบทสนทนา',
      sessionDensityDesc: 'เลือกปริมาณรายละเอียดที่แสดงใต้ชื่อบทสนทนาในแถบด้านข้าง',
      sessionDensityCompact: 'กะทัดรัด',
      sessionDensityComfortable: 'พอดี',
      sessionDensityDetailed: 'ละเอียด',
      tabStripTitle: 'แถบแท็บ',
      tabStripDesc:
        'แสดงแท็บเหนือแต่ละพื้นที่ โหมดอัตโนมัติจะซ่อนแท็บเมื่อมีแผงเดียว เว้นแต่เปิดพื้นที่แชตหรือไทล์อื่นอยู่',
      tabStripAuto: 'อัตโนมัติ',
      tabStripAlways: 'แสดงเสมอ',
      tabStripNever: 'ซ่อนเสมอ',
      appActionsTitle: 'ตำแหน่งปุ่มควบคุมแอป',
      appActionsDesc:
        'ตำแหน่งปุ่มการตั้งค่า เค้าโครง และ HUD บนแถบชื่อหน้าต่าง เลือกด้านขวาเพื่อเว้นพื้นที่แท็บทางซ้าย',
      appActionsLeft: 'ซ้าย',
      appActionsRight: 'ขวา',
      terminalFontTitle: 'แบบอักษรเทอร์มินัล',
      terminalFontDesc:
        'เลือกแบบอักษรที่ติดตั้งไว้สำหรับเทอร์มินัลในเดสก์ท็อป โดย Nerd Fonts รองรับ Powerlevel10k และไอคอนเชลล์ เว้นว่างเพื่อใช้ JetBrains Mono ที่มีมาให้',
      terminalFontPlaceholder: 'MesloLGS NF หรือรายชื่อแบบอักษร CSS',
      terminalFontPreview: 'ตัวอย่างสัญลักษณ์',
      terminalFontReset: 'ใช้ค่าเริ่มต้น',
      chatFontTitle: 'แบบอักษรแชต',
      chatFontDesc:
        'เลือกแบบอักษรที่ติดตั้งไว้สำหรับแชตและส่วนอื่นของแอป เช่น OpenDyslexic ที่ช่วยให้อ่านง่ายขึ้น เว้นว่างเพื่อใช้แบบอักษรของธีม',
      chatFontPlaceholder: 'OpenDyslexic หรือรายชื่อแบบอักษร CSS',
      chatFontPreview: 'ดูตัวอย่าง',
      chatFontSample: 'ภาษาไทยอ่านง่าย สระและวรรณยุกต์ครบถ้วน กำลังเริ่มบทสนทนา 0123456789',
      chatFontReset: 'ใช้แบบอักษรของธีม',
      translucencyTitle: 'ความโปร่งแสงของหน้าต่าง',
      translucencyDesc: 'ทำให้ทั้งหน้าต่างรวมถึงข้อความโปร่งแสงจนเห็นเดสก์ท็อปด้านหลัง ปรับแยกสำหรับโหมดสว่างและมืดได้',
      translucencyGlassDesc:
        'กระจกฝ้า: เห็นเดสก์ท็อปด้านหลังเป็นภาพเบลอ ขณะที่ข้อความยังคมชัด ปรับแยกสำหรับโหมดสว่างและมืดได้',
      translucencyModeClear: 'โปร่งใส',
      translucencyModeGlass: 'กระจกฝ้า',
      translucencyTintTitle: 'โทนสี',
      translucencyFadeTitle: 'ความจาง',
      translucencyFrostTitle: 'ลักษณะกระจกฝ้า',
      translucencyFrost: {
        'under-window': 'ลึก',
        popover: 'นุ่มนวล',
        titlebar: 'สดใส',
        header: 'แสงจ้า'
      },
      translucencyScopeTitle: 'พื้นที่',
      translucencyScope: {
        window: 'หน้าต่างทั้งหมด',
        sidebar: 'แถบด้านข้างเท่านั้น'
      },
      backdropTitle: 'ฉากหลังแชต',
      backdropDesc: 'ภาพรูปปั้นจาง ๆ เบื้องหลังการสนทนา',
      userBubbleTitle: 'กล่องข้อความ',
      userBubbleDesc: 'ความโปร่งใสของกล่องข้อความที่คุณส่ง ค่า 0 ทึบเต็มที่ ส่วนค่า 100 เหลือเพียงเส้นขอบ',
      textDirectionTitle: 'ทิศทางข้อความ',
      textDirectionDesc:
        'กำหนดทิศทางข้อความในแชตและช่องเขียน โหมดอัตโนมัติใช้ตัวอักษรแรกของแต่ละย่อหน้า หากข้อความหลายภาษาเรียงผิด ให้เลือกทิศทางเอง โค้ดจะแสดงจากซ้ายไปขวาเสมอ',
      textDirection: { auto: 'อัตโนมัติ', rtl: 'ขวาไปซ้าย', ltr: 'ซ้ายไปขวา' },
      introSplashTitle: 'หน้าต้อนรับแชต',
      introSplashDesc: 'แสดงโลโก้ตัวอักษรและข้อความชวนเริ่มสนทนาเมื่อแชตยังว่าง',
      modelPricingTitle: 'ค่าบริการโมเดล',
      modelPricingDesc: 'แสดงค่าข้อมูลเข้า ผลลัพธ์ และการอ่านแคชต่อล้านโทเคนในเมนูเลือกโมเดล',
      reactionsTitle: 'การตอบสนองด้วยอีโมจิ',
      reactionsDesc: 'แตะอีโมจิเพื่อตอบสนองต่อข้อความแบบ iMessage และให้ Hermes ตอบสนองต่อข้อความของคุณได้',
      tipsTitle: 'เคล็ดลับในแอป',
      tipsDesc:
        'แสดงคำแนะนำจากแอปและ Hermes เป็นครั้งคราว แต่ละเคล็ดลับแสดงครั้งเดียว ระบบจะปิดหลังใช้งาน 30 วันแรก และคุณเปิดใหม่ได้',
      tipsReset: (count: number) => `แสดงเคล็ดลับ ${count} รายการอีกครั้ง`,
      toursTitle: 'แนะนำการใช้งานทีละขั้นตอน',
      toursDesc: 'ให้ Hermes ไฮไลต์ส่วนต่าง ๆ ของแอปขณะแนะนำการใช้งาน ระบบจะปิดหลังใช้งาน 30 วันแรก และคุณเปิดใหม่ได้',
      composerPopoutTitle: 'ช่องเขียนข้อความแบบลอย',
      composerPopoutDesc: 'ให้ลากช่องเขียนข้อความออกจากตำแหน่งยึดได้ เมื่อปิด ช่องเขียนจะอยู่ด้านล่างเสมอ',
      fileBrowserTitle: 'แผงไฟล์',
      fileBrowserDesc: 'แสดงแผงไฟล์ข้างแชตเมื่อเปิดพื้นที่ทำงาน เปลี่ยนค่านี้ได้จากปุ่มบนแถบชื่อหน้าต่างเช่นกัน',
      vibeHeartsTitle: 'หัวใจลอย',
      vibeHeartsDesc: 'แสดงหัวใจลอยเมื่อคุณกล่าวขอบคุณ บอกรัก ชมบอท หรือส่งหัวใจ ทำงานแยกจากการตอบสนองด้วยอีโมจิด้านบน',
      embedsTitle: 'เนื้อหาเว็บที่ฝังในแชต',
      embedsDesc:
        'โหลดตัวอย่างเนื้อหาจากเว็บไซต์ภายนอก (YouTube, X, …) เลือก “ถามก่อน” เพื่ออนุญาตทีละรายการ “โหลดเสมอ” เพื่อโหลดอัตโนมัติ หรือ “ปิด” เพื่อแสดงเฉพาะลิงก์',
      embedsAsk: 'ถามก่อน',
      embedsAlways: 'โหลดเสมอ',
      embedsOff: 'ปิด',
      embedsReset: (count: number) => `รีเซ็ตสิทธิ์ของบริการที่อนุญาตไว้ ${count} รายการ`,
      resumeLastSessionTitle: 'เปิดแชตล่าสุดเมื่อเริ่มแอป',
      resumeLastSessionDesc:
        'เมื่อเปิดใช้งาน แอปจะกลับไปยังแชตล่าสุดทุกครั้งที่เปิดแอปขึ้นใหม่ ปิดเพื่อเริ่มด้วยแชตใหม่เสมอ',
      product: 'แบบสรุป',
      productDesc: 'แสดงการทำงานของเครื่องมือพร้อมสรุปที่กระชับและอ่านง่าย',
      technical: 'แบบเทคนิค',
      technicalDesc: 'แสดงอาร์กิวเมนต์และผลลัพธ์ดิบของเครื่องมือรวมถึงรายละเอียดทางเทคนิค',
      themeTitle: 'ธีม',
      themeDesc: 'ชุดสีสำหรับเดสก์ท็อป โดยใช้ร่วมกับโหมดสีที่เลือก',
      themeSearchPlaceholder: 'ค้นหาธีมของคุณหรือใน VS Code Marketplace…',
      themeProfileNote: profile => `บันทึกสำหรับโปรไฟล์ ${profile} — แต่ละโปรไฟล์มีธีมของตนเอง`,
      installTitle: 'ติดตั้งจาก VS Code',
      installDesc: 'วาง ID ส่วนขยายจาก Marketplace (เช่น dracula-theme.theme-dracula) เพื่อแปลงธีมสีมาใช้ในเดสก์ท็อป',
      installPlaceholder: 'publisher.extension',
      installButton: 'ติดตั้ง',
      installing: 'กำลังติดตั้ง…',
      installError: 'ไม่สามารถติดตั้งธีมนั้นได้',
      installed: name => `ติดตั้ง “${name}” แล้ว`,
      removeTheme: 'ลบธีม',
      importedBadge: 'นำเข้าแล้ว',
      pet: {
        title: 'สัตว์เลี้ยง',
        intro:
          'เลือกมาสคอตเคลื่อนไหวจาก petdex ให้ลอยอยู่บนแอปและตอบสนองตามงานของ Hermes เช่น วิ่งขณะใช้เครื่องมือ ฉลองเมื่องานสำเร็จ และทำหน้างอนเมื่อเกิดข้อผิดพลาด',
        restartHint:
          'ต้องเริ่มแอปใหม่เพื่อใช้สัตว์เลี้ยง เพราะแอปนี้เปิดอยู่ก่อนเพิ่มฟีเจอร์นี้ ปิดและเปิด Hermes อีกครั้ง แล้วกลับมาที่นี่',
        scaleTitle: 'ขนาด',
        scaleDesc: 'ปรับขนาดมาสคอตที่ลอยอยู่ มีผลทันทีทุกหน้าต่าง',
        roamTitle: 'เดินเล่น',
        roamDesc: 'ปล่อยให้สัตว์เลี้ยงเดินไปตามหน้าต่างด้วยตัวเองในขณะที่ไม่ได้ใช้งาน',
        chooseTitle: 'เลือกสัตว์เลี้ยง',
        chooseDesc: 'เลือกเพื่อเปิดใช้งาน โดยระบบจะติดตั้งให้หากยังไม่มี',
        searchPlaceholder: 'ค้นหาสัตว์เลี้ยง...',
        unreachable: 'ไม่สามารถเข้าถึงแกลเลอรี petdex ตรวจสอบการเชื่อมต่อของคุณและเปิดหน้านี้อีกครั้ง',
        noMatch: query => `ไม่มีสัตว์เลี้ยงที่ตรงกับ "${query}"`,
        installedTag: 'ติดตั้งแล้ว',
        generatedTag: 'สร้างขึ้น',
        countCapped: (cap, total) => `แสดง ${cap} จาก ${total} — พิมพ์เพื่อกรองรายการ`,
        count: n => `สัตว์เลี้ยง ${n} ตัว`,
        uninstall: name => `ถอนการติดตั้ง ${name}`,
        delete: name => `ลบ ${name}`,
        deleteTitle: name => `ลบ ${name} หรือไม่`,
        deleteBody: 'การดำเนินการนี้จะลบสัตว์เลี้ยงอย่างถาวร เนื่องจากไม่สามารถติดตั้งใหม่ได้',
        deleteConfirm: 'ลบ',
        rename: name => `เปลี่ยนชื่อ ${name}`,
        renameTitle: 'เปลี่ยนชื่อสัตว์เลี้ยง',
        renamePlaceholder: 'ตั้งชื่อสัตว์เลี้ยงของคุณ',
        renameSave: 'บันทึก',
        exportPet: name => `ส่งออก ${name}`,
        adoptFailed: slug => `ไม่สามารถใช้ ${slug} ได้`,
        uninstallFailed: slug => `ไม่สามารถถอนการติดตั้ง ${slug} ได้`,
        renameFailed: slug => `ไม่สามารถเปลี่ยนชื่อ ${slug} ได้`,
        exportFailed: slug => `ไม่สามารถส่งออก ${slug} ได้`,
        noneAvailable: 'ไม่มีสัตว์เลี้ยงให้เปิดในขณะนี้',
        turnOnFailed: 'ไม่สามารถเปิดสัตว์เลี้ยงได้',
        turnOffFailed: 'ไม่สามารถปิดสัตว์เลี้ยงได้'
      }
    },
    fieldLabels: TH_FIELD_LABELS,
    fieldDescriptions: TH_FIELD_DESCRIPTIONS,
    uninstallSection: thUninstallSection,
    memoryLayers: thMemoryLayers,
    customEndpoints: {
      active: 'ใช้งานอยู่',
      apiKeySet: 'ตั้งค่าคีย์ API แล้ว',
      use: 'ใช้',
      editTitle: 'แก้ไขปลายทาง',
      addTitle: 'เพิ่มปลายทาง',
      fields: {
        name: 'ชื่อ',
        providerId: 'ID ผู้ให้บริการ',
        endpointUrl: 'URL ปลายทาง',
        defaultModel: 'โมเดลเริ่มต้น',
        context: 'บริบท',
        apiKey: 'คีย์ API',
        apiKeyNewPlaceholder: 'เว้นว่างไว้เพื่อเก็บคีย์ปัจจุบันไว้',
        apiKeyPlaceholder: 'ไม่บังคับ',
        useNewChats: 'ใช้สำหรับแชตใหม่',
        discoverModels: 'ค้นหาโมเดล'
      },
      test: 'ทดสอบ',
      save: 'บันทึก',
      newEndpoint: 'ปลายทางใหม่',
      apiMode: 'โหมด API',
      autoDetect: 'ตรวจจับอัตโนมัติ',
      couldNotLoad: 'ไม่สามารถโหลดปลายทางที่กำหนดเองได้',
      endpointSaved: 'บันทึกปลายทางที่กำหนดเองแล้ว',
      saveFailed: 'บันทึกล้มเหลว',
      endpointReachable: 'ปลายทางสามารถเข้าถึงได้',
      endpointReachableTransport: transport => `เชื่อมต่อปลายทางได้ (ผ่าน ${transport})`,
      endpointReachableModels: (reachable, count) => `${reachable} พบ ${count} โมเดล`,
      endpointValidationFailed: 'การตรวจสอบปลายทางล้มเหลว',
      validationFailed: 'ตรวจสอบความถูกต้องไม่สำเร็จ',
      activationFailed: 'เปิดใช้งานไม่สำเร็จ',
      deleteConfirm: name => `ลบ ${name} หรือไม่`,
      deleteFailed: 'ลบไม่สำเร็จ',
      title: 'ปลายทางที่กำหนดเอง',
      deleteEndpoint: 'ลบปลายทาง',
      emptyDescription: 'เพิ่มปลายทางที่รองรับ API แบบ OpenAI ด้านล่าง',
      emptyTitle: 'ไม่มีปลายทางที่กำหนดเอง',
      namePlaceholder: 'Axet Proxy',
      contextPlaceholder: 'อัตโนมัติ'
    },
    computerUse: {
      accessibility: 'การช่วยการเข้าถึง',
      screenRecording: 'การบันทึกหน้าจอ',
      driverHealth: 'สถานะไดรเวอร์'
    },
    about: { updates: 'การอัปเดต', channel: thUpdateChannel },
    config: {
      minimizeToTrayTitle: 'ย่อหน้าต่างไปยังถาดระบบ',
      minimizeToTrayDesc:
        'ย่อขนาดหน้าต่างหรือปิดหน้าต่างหลักเพื่อซ่อนไว้ในถาดระบบ (แถบเมนูบน macOS) และให้ Hermes ทำงานต่อไป ใช้ Quit Hermes จากเมนูถาดหรือ Cmd+Q เพื่อออก ปิดโดยค่าเริ่มต้น ใช้กับอุปกรณ์นี้เท่านั้น',
      minimizeToTrayUnavailable:
        'ถาดระบบไม่พร้อมใช้งาน หน้าต่างจะย่อและปิดตามปกติ ปิดแล้วเปิดตัวเลือกนี้ใหม่เพื่อลองอีกครั้ง',
      none: 'ไม่มี',
      noneParen: '(ไม่มี)',
      builtinOnly: 'เฉพาะที่มีมาให้',
      notSet: 'ไม่ได้ตั้งค่า',
      commaSeparated: 'ค่าที่คั่นด้วยเครื่องหมายจุลภาค',
      searchPlaceholder: 'ค้นหา…',
      noResults: 'ไม่พบผลลัพธ์',
      systemDefault: 'ค่าเริ่มต้นของระบบ',
      loading: 'กำลังโหลดการตั้งค่า Hermes…',
      emptyTitle: 'ไม่มีตัวเลือกให้ตั้งค่า',
      emptyDesc: 'ส่วนนี้ไม่มีการตั้งค่าที่ปรับได้',
      failedLoad: 'โหลดการตั้งค่าไม่สำเร็จ',
      autosaveFailed: 'บันทึกอัตโนมัติล้มเหลว',
      imported: 'นำเข้าการตั้งค่าแล้ว',
      invalidJson: 'JSON ของการตั้งค่าไม่ถูกต้อง',
      toolsetsWipeConfirm:
        'นำชุดเครื่องมือที่เปิดใช้งานทั้งหมดออกหรือไม่? ความจำ เทอร์มินัล การค้นหาเว็บ การมอบหมายงาน และเครื่องมือส่วนใหญ่จะใช้ไม่ได้จนกว่าคุณจะเปิดใช้งานอีกครั้ง',
      keepAwakeTitle: 'ป้องกันคอมพิวเตอร์เข้าสู่โหมดพัก',
      keepAwakeDesc:
        'ป้องกันเครื่องเข้าสู่โหมดพัก เลือก “ขณะทำงาน” เพื่อป้องกันเฉพาะช่วงที่เอเจนต์กำลังทำงาน งานข้ามคืนจึงทำต่อได้และเครื่องยังพักได้เมื่อไม่มีงาน หน้าจอยังหรี่แสงได้',
      keepAwakeOff: 'ปิด',
      keepAwakeWhileWorking: 'ขณะทำงาน',
      keepAwakeAlways: 'เสมอ',
      disableF12Title: 'ปิดปุ่ม F12 สำหรับเครื่องมือนักพัฒนา',
      disableF12Desc: 'ไม่ให้ F12 เปิดเครื่องมือนักพัฒนา โดยยังใช้ Ctrl+Shift+I (หรือ Cmd+Opt+I บน Mac) ได้',
      alwaysExternalLinksTitle: 'เปิดลิงก์ในเบราว์เซอร์ภายนอกเสมอ',
      alwaysExternalLinksDesc:
        'เปิดทุกลิงก์ที่คุณคลิกในเบราว์เซอร์ระบบของคุณแทนเบราว์เซอร์ในแอป "เปิดในเบราว์เซอร์ในแอป" ในเมนูคลิกขวายังคงใช้งานได้',
      attachmentSizeTitle: 'ขนาดไฟล์สูงสุดสำหรับดูตัวอย่างหรือแนบภาพ',
      attachmentSizeDesc:
        'ขนาดสูงสุดของไฟล์ในเครื่องที่เดสก์ท็อปจะโหลดเพื่อดูตัวอย่างหรือแนบภาพ หน่วยเป็น MB ค่าเริ่มต้นคือ 16 ส่วนไฟล์แนบระยะไกลที่ไม่ใช่ภาพใช้ขีดจำกัดแยกที่ 256 MB การตั้งค่าสูงมากจะโหลดทั้งไฟล์เข้าหน่วยความจำ และอาจทำให้แอปค้างหรือปิดตัวลง',
      attachmentSizeUnit: 'MB',
      attachmentSizeLabel: 'ขนาดไฟล์สูงสุดสำหรับดูตัวอย่างหรือแนบภาพ หน่วยเมกะไบต์',
      voiceShortcutHintTitle: 'ทางลัดการบันทึกเสียง',
      voiceShortcutHintDesc:
        'ตั้งค่าทางลัดการบันทึกเสียงในการตั้งค่า \u2192 แป้นพิมพ์ลัด ("เริ่ม / หยุดการสนทนาด้วยเสียง") ค่ากำหนด voice.record_key ใช้กับ CLI และ TUI เท่านั้น',
      showOptions: 'แสดงตัวเลือก'
    },
    hudModifier: {
      title: 'แตะเพื่อเรียก HUD',
      description:
        'แตะแล้วปล่อย \u2318 + Option บน Mac หรือ Ctrl + Alt บน Windows/Linux เพื่อเรียก HUD มาไว้ด้านหน้าจากแอปใดก็ได้ ปิดโดยค่าเริ่มต้น ใช้กับอุปกรณ์นี้เท่านั้น',
      permission:
        'อนุญาต Hermes ในการตั้งค่าระบบ \u2192 ความเป็นส่วนตัวและความปลอดภัย \u2192 การตรวจสอบอินพุต จากนั้นลองอีกครั้ง ท่าทางนี้ไม่บันทึกการกดแป้นพิมพ์หรือจับภาพหน้าจอของคุณ',
      unavailable:
        'ตัวช่วยตรวจจับท่าทาง HUD เริ่มทำงานไม่ได้หรือหยุดโดยไม่คาดคิด ลองอีกครั้งหรือเริ่ม Hermes ใหม่ ทางลัด HUD เดิมยังใช้ได้ภายใน Hermes',
      missingHelper: 'การติดตั้ง Hermes นี้ไม่มีตัวช่วยท่าทาง HUD อัปเดตหรือติดตั้ง Hermes ใหม่ จากนั้นลองอีกครั้ง',
      unsupportedSession:
        'สภาพแวดล้อมเดสก์ท็อปนี้ไม่รองรับการแตะปุ่มเสริมจากทุกแอป บน Linux ต้องใช้ X11 โดยยังไม่รองรับ Wayland'
    },
    screenshot: {
      enabledTitle: 'ทางลัดภาพหน้าจอ',
      enabledDesc:
        'กดปุ่ม Command ทั้งสองพร้อมกันจากแอปใดก็ได้เพื่อจับภาพหน้าต่างด้านหน้าสุดและแนบกับข้อความร่างปัจจุบันใน Hermes โดยไม่ส่งอัตโนมัติ ปิดโดยค่าเริ่มต้น ใช้กับ Mac เครื่องนี้เท่านั้น เนื้อหาของหน้าต่างอาจมีความละเอียดอ่อน — ตรวจสอบไฟล์แนบก่อนที่จะส่ง',
      statusTitle: 'สถานะทางลัดของภาพหน้าจอ',
      checking: 'กำลังตรวจสอบทางลัดภาพหน้าจอ...',
      disabled: 'ทางลัดภาพหน้าจอปิดอยู่',
      starting: 'กำลังเริ่มระบบรับแป้นพิมพ์ลัด ยังไม่พร้อมใช้งาน',
      ready: 'แป้นพิมพ์ลัดพร้อมแล้ว ภาพหน้าจอจะถูกแนบกับข้อความร่างปัจจุบัน โดยยังไม่ส่ง',
      inputPermission:
        'สิทธิ์การตรวจสอบอินพุตช่วยให้ Hermes ตรวจจับทั้งปุ่ม Command ในขณะที่แอปอื่นทำงานอยู่ อนุญาต Hermes ในการตั้งค่าระบบ \u2192 ความเป็นส่วนตัวและความปลอดภัย \u2192 การตรวจสอบอินพุต จากนั้นกลับมาที่นี่แล้วลองอีกครั้ง',
      screenPermission:
        'สิทธิ์การบันทึกหน้าจอช่วยให้ Hermes จับภาพหน้าต่างแอปที่อยู่ด้านหน้าสุดเมื่อคุณใช้ทางลัดนี้ อนุญาต Hermes ในการตั้งค่าระบบ \u2192 ความเป็นส่วนตัวและความปลอดภัย \u2192 การบันทึกหน้าจอ จากนั้นกลับมาที่นี่แล้วลองอีกครั้ง รีสตาร์ท Hermes หาก macOS ถาม',
      openSettings: 'เปิดการตั้งค่าระบบ',
      retry: 'ลองอีกครั้ง',
      unavailable: 'ทางลัดภาพหน้าจอไม่พร้อมใช้งาน ลองอีกครั้งหรือปิด',
      errorTitle: 'ข้อผิดพลาดทางลัดภาพหน้าจอ',
      loadFailed: 'ไม่สามารถอ่านสถานะทางลัดได้ ลองตรวจสอบการตั้งค่าปัจจุบันอีกครั้ง',
      saveFailed: 'ไม่สามารถยืนยันการเปลี่ยนแปลงทางลัดได้ ลองตรวจสอบการตั้งค่าปัจจุบันอีกครั้ง',
      permissionFailed: 'ไม่สามารถเปิดการตั้งค่าระบบได้ เปิดความเป็นส่วนตัวและความปลอดภัยด้วยตนเอง จากนั้นลองอีกครั้ง',
      captureFailed: 'ไม่สามารถจับภาพหน้าต่างด้านหน้าสุดได้ ไม่มีอะไรแนบหรือส่ง',
      contextChanged: 'ร่างปัจจุบันมีการเปลี่ยนแปลงระหว่างการจับภาพ ไม่ได้แนบหรือส่งภาพหน้าจอ'
    },
    quickEntry: {
      enabledTitle: 'เขียนข้อความด่วน',
      enabledDesc:
        'ใช้แป้นพิมพ์ลัดจากแอปใดก็ได้เพื่อเปิดช่องเขียนข้อความขนาดเล็ก แล้วส่งพรอมป์ต์โดยไม่ต้องเปิดหน้าต่าง Hermes',
      shortcutTitle: 'ปุ่มลัดเขียนข้อความด่วน',
      shortcutDesc: 'ต้องมีปุ่มเสริมอย่างน้อยหนึ่งปุ่ม เช่น CommandOrControl+Shift+Space',
      active: 'ทางลัดเปิดใช้งานอยู่',
      takenBy: 'แอปอื่นใช้ทางลัดนี้อยู่แล้ว — เลือกทางลัดอื่น',
      invalidShortcut: 'แป้นพิมพ์ลัดไม่ถูกต้อง ต้องมีปุ่มเสริมอย่างน้อยหนึ่งปุ่ม'
    },
    credentials: {
      pasteKey: 'วางคีย์',
      pasteLabelKey: label => `วางคีย์ ${label}`,
      optional: 'ไม่บังคับ',
      enterValueFirst: 'ป้อนค่าก่อน',
      couldNotSave: 'บันทึกข้อมูลยืนยันตัวตนไม่สำเร็จ',
      remove: 'นำออก',
      getKey: 'รับคีย์ API',
      saving: 'กำลังบันทึก'
    },
    envActions: {
      actions: 'การดำเนินการ',
      manageInKeys: 'จัดการในคีย์ API',
      docs: 'เอกสาร',
      hideValue: 'ซ่อนค่า',
      revealValue: 'แสดงค่า',
      replace: 'แทนที่',
      set: 'ตั้งค่า',
      clear: 'ล้าง'
    },
    // v2 multi-connection registry: Settings → Gateways.
    connections: {
      title: 'เกตเวย์ที่บันทึกไว้',
      intro: 'จัดการอุปกรณ์นี้และเกตเวย์ Hermes ที่เข้าถึงผ่านการเชื่อมต่อระยะไกล SSH หรือคลาวด์',
      stagedNote:
        'สลับเกตเวย์ได้จากหน้าบทสนทนา โดยโปรไฟล์ บทสนทนา การรับส่งข้อความ และงาน cron จะยังอยู่กับเกตเวย์เดิม งานบนเกตเวย์อื่นยังดำเนินต่อไป',
      launchModeTitle: 'เมื่อเริ่มแอป ให้กลับไปยังบทสนทนาบนเกตเวย์ที่ใช้ล่าสุด',
      launchModeDesc: 'เมื่อปิดตัวเลือกนี้ หน้าบทสนทนาจะเปิดบนเกตเวย์หลัก',
      searchPlaceholder: 'ค้นหาเกตเวย์…',
      noSearchResults: 'ไม่มีเกตเวย์ที่ตรงกับการค้นหาของคุณ',
      loadFailed: 'ไม่สามารถโหลดการเชื่อมต่อได้',
      currentPill: 'ปัจจุบัน',
      primaryPill: 'หลัก',
      managedPill: 'แอปจัดการให้',
      addConnection: 'เพิ่มการเชื่อมต่อ',
      editConnection: 'แก้ไข',
      removeConnection: 'นำออก',
      removeConfirmTitle: 'ลบการเชื่อมต่อนี้หรือไม่',
      removeConfirmDesc: (label: string) =>
        `“${label}” จะถูกนำออกจากแอปนี้ ตัวระบบ Hermes ที่เชื่อมต่อจะไม่เปลี่ยนแปลง คุณเพิ่มการเชื่อมต่อใหม่ได้ทุกเมื่อ`,
      makePrimary: 'ตั้งเป็นเกตเวย์หลัก',
      testConnection: 'ทดสอบ',
      testOk: 'เข้าถึงได้',
      testFailed: 'การทดสอบการเชื่อมต่อล้มเหลว',
      saveFailed: 'ไม่สามารถบันทึกการเชื่อมต่อได้',
      removeFailed: 'ไม่สามารถลบการเชื่อมต่อได้',
      updateAll: 'อัปเดตอินสแตนซ์ทั้งหมด',
      updateAllRunning: 'กำลังอัปเดตอินสแตนซ์ทั้งหมด...',
      updateAllDone: 'ส่งคำสั่งอัปเดตแล้ว',
      updateAllFailed: 'ส่งคำสั่งอัปเดตไม่สำเร็จ',
      updateSkippedCloud: 'จัดการโดย Hermes Cloud',
      kindLocal: 'ในเครื่อง',
      kindRemote: 'เกตเวย์ระยะไกล',
      kindCloud: 'Hermes Cloud',
      kindSsh: 'SSH',
      kindLocalDesc: 'รันไทม์ Hermes ที่จัดการโดยแอปนี้',
      kindRemoteDesc: 'เกตเวย์ Hermes ที่เข้าถึงผ่าน HTTP(S) — LAN, Tailscale หรืออินเทอร์เน็ต',
      kindCloudDesc: 'อินสแตนซ์ที่โฮสต์ซึ่งค้นพบผ่านบัญชี Hermes Cloud ของคุณ',
      kindSshDesc: 'Hermes ที่เชื่อมต่อผ่าน SSH',
      labelTitle: 'ชื่อ',
      labelDesc:
        'ต้องระบุชื่อที่ไม่ซ้ำกัน เช่น “Homelab” หรือ “แล็ปท็อปที่ทำงาน” ชื่อนี้จะแสดงทุกจุดที่มีระบบ Hermes นี้ปรากฏอยู่',
      labelPlaceholder: 'โฮมแล็บ',
      urlTitle: 'URL เกตเวย์',
      sshHostTitle: 'โฮสต์ SSH',
      headersTitle: 'ส่วนหัวเพิ่มเติมสำหรับเกตเวย์',
      headersDesc:
        'ส่งพร้อมทุกคำขอ HTTP และ WebSocket ไปยังเกตเวย์นี้ ใช้กับพร็อกซีควบคุมการเข้าถึง เช่น Cloudflare Access (CF-Access-Client-Id / CF-Access-Client-Secret) ค่าจะถูกเข้ารหัสเมื่อจัดเก็บ ส่วนหัวที่ Hermes จัดการเอง (Authorization, Cookie, Host…) จะถูกละเว้น',
      headerValuePlaceholder: 'ค่า',
      headerValueSaved: 'บันทึกแล้ว — เว้นว่างไว้เพื่อเก็บไว้',
      headerAdd: 'เพิ่มส่วนหัว',
      headerRemove: 'นำออก',
      duplicateLocal: 'แอปนี้มีการเชื่อมต่อในเครื่องที่จัดการอยู่แล้ว — มีได้เพียงรายการเดียว',
      duplicateUrl: (label: string) => `มีการเชื่อมต่อกับ URL เกตเวย์นี้อยู่แล้ว (“${label}”)`,
      duplicateSsh: (label: string) => `มีการเชื่อมต่อกับโฮสต์ SSH นี้อยู่แล้ว (“${label}”)`,
      sameBackendHint: (label: string) => `แบ็กเอนด์เดียวกันกับ “${label}”`,
      localAddHint: 'เพิ่มการเชื่อมต่อในเครื่องไม่ได้: มีการเชื่อมต่อที่แอปจัดการอยู่แล้ว และมีได้เพียงรายการเดียว',
      cloudAddHint:
        'เคล็ดลับ: เข้าสู่ระบบ Hermes Cloud ด้านบนเพื่อค้นหาเอเจนต์อัตโนมัติ แบบฟอร์มนี้ใช้เพิ่มระบบที่คุณทราบ URL อยู่แล้วด้วยตนเอง',
      save: 'บันทึกการเชื่อมต่อ',
      saving: 'กำลังบันทึก...',
      cancel: 'ยกเลิก',
      empty: 'ยังไม่มีการเชื่อมต่อที่ลงทะเบียน'
    },
    managedUpdates: {
      title: 'การอัปเดตที่แอปจัดการ',
      intro:
        'เดสก์ท็อปจัดการอัปเดตผ่าน SSH เป็นกระบวนการเดียว: รอให้งานในบทสนทนาจบ อัปเดตชุดซอร์สโค้ดบนเครื่องระยะไกล และคืนการทำงานของทุกโปรไฟล์พร้อมบันทึกผลที่อ้างอิงถึงกันได้',
      sshConnection: 'การติดตั้ง SSH ที่จัดการโดยเดสก์ท็อป',
      update: 'อัปเดต',
      updating: 'กำลังอัปเดต...',
      progress: 'กำลังรอให้งานในบทสนทนาจบ อัปเดตระบบระยะไกล และคืนการทำงานของโปรไฟล์…',
      updated: 'อัปเดตแล้ว',
      partial: 'อัปเดตแล้ว — คืนการทำงานไม่สำเร็จ',
      refused: 'ปฏิเสธ',
      failed: 'การอัปเดตล้มเหลว',
      alreadyRunning: 'อยู่ระหว่างดำเนินการอัปเดต',
      receipt: (id: string, outcome: string) => `บันทึกผล ${id} \u00B7 ${outcome}`,
      receiptVersions: (pre: string, post: string) => `${pre} → ${post}`,
      scopesRestored: (profiles: string) => `คืนการทำงานของโปรไฟล์: ${profiles}`,
      scopeNotRestored: (profile: string, error: string) => `คืนการทำงานของโปรไฟล์ “${profile}” ไม่สำเร็จ: ${error}`
    },
    gateway: {
      loading: 'กำลังโหลดการตั้งค่าเกตเวย์...',
      ...thGatewayHost,
      title: 'การเชื่อมต่อเกตเวย์',
      envOverride: 'กำหนดโดยตัวแปรสภาพแวดล้อม',
      intro:
        'ใช้เกตเวย์ในเครื่องตามค่าเริ่มต้น เลือกระยะไกลเมื่อจะใช้แบ็กเอนด์ Hermes บนเครื่องอื่น การเชื่อมต่อเกตเวย์เป็นการตั้งค่าระดับเครื่อง ส่วนโปรไฟล์จะโหลดจากเกตเวย์ที่เชื่อมต่อ',
      envOverrideTitle: 'การเชื่อมต่อนี้ถูกกำหนดจากการเริ่ม Hermes',
      envOverrideDesc:
        'การตั้งค่าเริ่มต้นภายนอกแอปเป็นผู้เลือกการเชื่อมต่อนี้ ตัวเลือกด้านล่างจึงแก้ไขไม่ได้ เริ่ม Hermes ใหม่โดยไม่ใช้การตั้งค่านั้น หรือขอให้ผู้ตั้งค่าดำเนินการ เพื่อกลับมาเปลี่ยนได้ที่นี่',
      modeTitle: 'โหมดการเชื่อมต่อ',
      localTitle: 'เกตเวย์ในเครื่อง',
      localDesc: 'เริ่มแบ็กเอนด์ส่วนตัวของ Hermes บน localhost เป็นค่าเริ่มต้นและทำงานแบบออฟไลน์ได้',
      remoteTitle: 'เกตเวย์ระยะไกล',
      remoteDesc: 'เชื่อมต่อแอปเดสก์ท็อปนี้กับแบ็กเอนด์ Hermes ระยะไกล',
      remoteAuthHint:
        'เกตเวย์ที่ให้บริการแบบโฮสต์ใช้ OAuth หรือชื่อผู้ใช้และรหัสผ่าน ส่วนเกตเวย์ที่โฮสต์เองอาจใช้โทเคนเซสชัน',
      cloudTitle: 'Hermes Cloud',
      cloudDesc: 'เข้าสู่ระบบ Hermes Cloud ครั้งเดียว แล้วเลือกเอเจนต์ในบัญชีได้โดยไม่ต้องวาง URL',
      cloudSignInTitle: 'Hermes Cloud',
      cloudSignIn: 'เข้าสู่ระบบ Hermes Cloud',
      cloudSignedIn: 'เข้าสู่ระบบ Hermes Cloud แล้ว',
      cloudNeedsSignIn: 'เข้าสู่ระบบ Hermes Cloud เพื่อค้นหาเอเจนต์ในบัญชีของคุณ',
      cloudSignedInDesc: 'คุณเข้าสู่ระบบแล้ว เลือกเอเจนต์ด้านล่าง เซสชันเข้าสู่ระบบจะต่ออายุโดยอัตโนมัติ',
      cloudAgentsTitle: 'เอเจนต์ของคุณ',
      cloudOrgPickerTitle: 'เลือกองค์กร',
      cloudOrgSelect: 'เลือก',
      cloudOrgChange: 'เปลี่ยนองค์กร',
      cloudOrgRole: role => `บทบาท: ${role}`,
      cloudLoadingAgents: 'กำลังโหลดเอเจนต์ของคุณ...',
      cloudNoAgents: {
        before: 'ไม่พบเอเจนต์ในบัญชีนี้ สร้างเอเจนต์ได้ใน ',
        linkText: 'พอร์ทัล Nous',
        after: ' แล้วรีเฟรช'
      },
      cloudRefresh: 'รีเฟรช',
      cloudConnect: 'เชื่อมต่อ',
      cloudSavedTitle: 'เกตเวย์คลาวด์ที่บันทึกไว้',
      cloudSavedDesc:
        'ใช้เกตเวย์ที่บันทึกไว้โดยไม่ต้องเปลี่ยนค่าเริ่มต้น เข้าสู่ระบบด้านล่างเพื่อเพิ่มอินสแตนซ์ จัดการชื่อและการเข้าสู่ระบบในรายการการเชื่อมต่อที่บันทึกไว้',
      cloudUseSaved: 'ใช้เกตเวย์',
      cloudActive: 'ใช้งานอยู่ในหน้าต่างนี้',
      cloudConnecting: 'กำลังเชื่อมต่อ…',
      cloudDiscoverFailed: 'โหลดเอเจนต์ Hermes Cloud ของคุณไม่สำเร็จ',
      cloudConnectFailed: 'ไม่สามารถเชื่อมต่อกับเอเจนต์นั้นได้',
      cloudSignInFailed: 'เข้าสู่ระบบ Hermes Cloud ไม่สำเร็จ',
      cloudSignedOutTitle: 'ออกจากระบบ Hermes Cloud แล้ว',
      cloudSignedOutMessage: 'ล้างเซสชันเข้าสู่ระบบ Hermes Cloud แล้ว',
      cloudConnectedTitle: 'เชื่อมต่อแล้ว',
      cloudConnectedPill: 'เชื่อมต่อแล้ว',
      cloudConnectedTo: name => `เชื่อมต่อกับ ${name} แล้ว`,
      cloudAgentProvisioning: 'กำลังเตรียมระบบ…',
      cloudStatusLabel: status => `สถานะ: ${status}`,
      remoteUrlTitle: 'URL ระยะไกล',
      remoteUrlDesc: 'URL หลักของแบ็กเอนด์แดชบอร์ดระยะไกล รองรับคำนำหน้าพาธ เช่น /hermes',
      probing: 'กำลังตรวจสอบวิธียืนยันตัวตนของเกตเวย์นี้…',
      probeError:
        'Hermes เข้าถึงที่อยู่นั้นไม่ได้ ตรวจสอบว่า URL ถูกต้องและเครื่องปลายทางกำลังใช้งาน Hermes ตัวเลือกเข้าสู่ระบบจะปรากฏเมื่อเกตเวย์ตอบกลับ',
      signedIn: 'เข้าสู่ระบบแล้ว',
      signIn: 'เข้าสู่ระบบ',
      signOut: 'ออกจากระบบ',
      signInWith: provider => `เข้าสู่ระบบด้วย ${provider}`,
      authTitle: 'การยืนยันตัวตน',
      authSignedInPassword:
        'เกตเวย์นี้ใช้ชื่อผู้ใช้และรหัสผ่าน คุณเข้าสู่ระบบแล้ว เซสชันเข้าสู่ระบบจะต่ออายุโดยอัตโนมัติ',
      authSignedInOauth: 'เกตเวย์นี้ใช้ OAuth คุณเข้าสู่ระบบแล้ว เซสชันเข้าสู่ระบบจะต่ออายุโดยอัตโนมัติ',
      authNeedsPassword: 'เกตเวย์นี้ใช้ชื่อผู้ใช้และรหัสผ่าน เข้าสู่ระบบเพื่อให้สิทธิ์แอปเดสก์ท็อปนี้',
      authNeedsOauth: provider => `เกตเวย์นี้ใช้ OAuth เข้าสู่ระบบด้วย ${provider} เพื่ออนุญาตแอปเดสก์ท็อปนี้`,
      tokenTitle: 'โทเคนเซสชัน',
      tokenDesc: 'โทเคนเซสชันของแดชบอร์ดสำหรับเข้าถึง REST และ WebSocket เว้นว่างเพื่อเก็บโทเคนที่บันทึกไว้',
      existingToken: value => `โทเคนเดิม ${value}`,
      savedToken: 'บันทึกแล้ว',
      pasteSessionToken: 'วางโทเคนเซสชัน',
      plainTextConfirmTitle: 'บันทึกโทเคนเกตเวย์เป็นข้อความธรรมดาหรือไม่?',
      plainTextConfirmDesc:
        'ไม่พบระบบเก็บคีย์ของ OS บนเครื่องนี้ ดังนั้นโทเคนจะถูกบันทึกโดยไม่เข้ารหัสในไฟล์การตั้งค่าการเชื่อมต่อของแอป ซึ่งสามารถอ่านได้โดยกระบวนการใดๆ ก็ตามที่ทำงานในฐานะผู้ใช้รายนี้ ติดตั้งหรือเปิดใช้งานระบบเก็บคีย์ของคุณ (GNOME Keyring หรือ KWallet บน Linux) สำหรับพื้นที่เก็บข้อมูลที่เข้ารหัส',
      plainTextConfirmAction: 'บันทึกเป็นข้อความธรรมดา',
      plainTextStoredTitle: 'โทเคนถูกเก็บเป็นข้อความธรรมดา',
      plainTextStoredDesc:
        'ระบบจัดเก็บข้อมูลอย่างปลอดภัยไม่พร้อมใช้งาน ดังนั้นโทเคนที่บันทึกไว้จึงถูกจัดเก็บไว้โดยไม่มีการเข้ารหัสในไฟล์การตั้งค่าการเชื่อมต่อของแอปในเครื่องนี้ ติดตั้งหรือเปิดใช้งานระบบเก็บคีย์ของคุณ (GNOME Keyring หรือ KWallet บน Linux) เพื่อเข้ารหัส',
      keychainEncryptionTitle: 'เข้ารหัสข้อมูลลับที่บันทึกไว้ด้วยระบบเก็บคีย์ของ OS',
      keychainEncryptionDesc:
        'ปิดโดยค่าเริ่มต้น เมื่อเปิด โทเคนเกตเวย์และข้อมูลรับรองสำหรับเข้าสู่ระบบจะถูกเข้ารหัสด้วยระบบเก็บคีย์ของคุณ (Keychain Access, GNOME Keyring หรือ Windows DPAPI) — ระบบอาจขออนุญาตหรือรหัสผ่าน หากปิด ข้อมูลจะถูกเก็บเป็นไฟล์ที่ไม่เข้ารหัสและจำกัดสิทธิ์อ่านไว้ที่บัญชีผู้ใช้ของคุณ',
      keychainEncryptionFailed: 'ไม่สามารถเปลี่ยนการเข้ารหัสข้อมูลลับได้',
      testRemote: 'ทดสอบการเชื่อมต่อระยะไกล',
      saveForRestart: 'บันทึกไว้สำหรับการรีสตาร์ทครั้งถัดไป',
      saveAndReconnect: 'บันทึกและเชื่อมต่อใหม่',
      diagnostics: 'การวินิจฉัย',
      diagnosticsDesc: 'แสดง desktop.log ในตัวจัดการไฟล์ของคุณ ซึ่งมีประโยชน์เมื่อเกตเวย์ไม่สามารถเริ่มทำงานได้',
      openLogs: 'เปิดบันทึกการทำงาน',
      incompleteTitle: 'เกตเวย์ระยะไกล ไม่สมบูรณ์',
      incompleteSignIn: 'ป้อน URL ระยะไกลและเข้าสู่ระบบก่อนเปลี่ยนไปใช้เกตเวย์ระยะไกล',
      incompleteToken: 'ป้อน URL และโทเคนเซสชัน ระยะไกลก่อนที่จะเปลี่ยนเป็นรีโมท',
      incompleteSignInTest: 'ป้อน URL ระยะไกลและเข้าสู่ระบบก่อนทดสอบ',
      incompleteTokenTest: 'ป้อน URL และโทเคนเซสชัน ระยะไกลก่อนทำการทดสอบ',
      enterUrlFirst: 'ป้อน URL ระยะไกลก่อน',
      restartingTitle: 'กำลังเริ่มการเชื่อมต่อเกตเวย์ใหม่',
      savedTitle: 'บันทึกการตั้งค่าเกตเวย์แล้ว',
      restartingMessage: 'Hermes Desktop จะเชื่อมต่อใหม่โดยใช้การตั้งค่าที่บันทึกไว้ — หน้าต่างแอปยังเปิดอยู่',
      savedMessage: 'บันทึกไว้สำหรับการรีสตาร์ทครั้งถัดไป',
      connectedTo: (baseUrl, version) => `เชื่อมต่อกับ ${baseUrl}${version ? ` \u00B7 Hermes ${version}` : ''} แล้ว`,
      reachableTitle: 'เข้าถึงเกตเวย์ระยะไกลได้',
      signedOutTitle: 'ออกจากระบบแล้ว',
      signedOutMessage: 'ล้างเซสชันเข้าสู่ระบบของเกตเวย์ระยะไกลแล้ว',
      failedLoad: 'โหลดการตั้งค่าเกตเวย์ล้มเหลว',
      signInFailed: 'การเข้าสู่ระบบล้มเหลว',
      signOutFailed: 'การออกจากระบบล้มเหลว',
      testFailed: 'การทดสอบเกตเวย์ระยะไกลล้มเหลว',
      applyFailed: 'ไม่สามารถใช้การตั้งค่าเกตเวย์ได้',
      saveFailed: 'ไม่สามารถบันทึกการตั้งค่าเกตเวย์ได้',
      sshTitle: 'เชื่อมต่อผ่าน SSH',
      sshDesc:
        'เริ่ม Hermes บนเครื่องระยะไกลผ่าน SSH แล้วเชื่อมต่อกับแอปนี้ คุณไม่ต้องเริ่มระบบหรือเปิดพอร์ตด้วยตนเอง ต้องมีการเข้าถึงโฮสต์ SSH ด้วยคีย์ที่ใช้งานได้',
      sshTrustHint: 'ระบบจะเชื่อถือและตรึงคีย์โฮสต์ที่ได้รับครั้งแรก หากคีย์เปลี่ยนภายหลัง ระบบจะปฏิเสธการเชื่อมต่อ',
      sshHostTitle: 'โฮสต์',
      sshHostDesc: 'user@host หรือนามแฝงโฮสต์จาก ~/.ssh/config',
      sshHostPick: 'เลือกโฮสต์...',
      sshHostPickTitle: 'โฮสต์',
      sshHostPickDesc: 'ชื่อโฮสต์จาก ~/.ssh/config หรือเลือกกำหนดเองเพื่อป้อนชื่อ',
      sshHostCustom: 'กำหนดเอง (ป้อนด้วยตนเอง)...',
      sshUserTitle: 'ผู้ใช้',
      sshUserDesc: 'เว้นว่าง = ~/.ssh/config หรือผู้ใช้ปัจจุบันของคุณ',
      sshUserPlaceholder: 'จาก ~/.ssh/config',
      sshPortTitle: 'พอร์ต',
      sshPortDesc: 'เว้นว่าง = 22 หรือพอร์ต ~/.ssh/config',
      sshKeyTitle: 'ไฟล์คีย์ยืนยันตัวตน',
      sshKeyDesc: 'พาธคีย์ส่วนตัว เว้นว่างเพื่อใช้ ssh-agent หรือ ~/.ssh/config',
      sshHermesPathTitle: 'พาธ Hermes (ไม่บังคับ)',
      sshHermesPathDesc: 'พาธเต็มของโปรแกรม Hermes บนเครื่องระยะไกล เว้นว่างเพื่อตรวจจับอัตโนมัติ',
      sshHermesPathPlaceholder: 'ตรวจจับอัตโนมัติ',
      sshTestConnection: 'ทดสอบ SSH',
      sshConnect: 'เชื่อมต่อ',
      sshButtonsHint: '“บันทึก” มีผลเมื่อเปิดแอปครั้งถัดไป ส่วน “เชื่อมต่อ” จะเชื่อมต่อใหม่ทันที',
      sshReachable: (host, platform) => `เข้าถึงได้: ${host} (${platform}) — พบ Hermes`,
      sshIncompleteHost: 'ป้อนโฮสต์ SSH ก่อนเชื่อมต่อ',
      sshErrUnreachable: 'ไม่สามารถเข้าถึงโฮสต์นั้นผ่าน SSH ตรวจสอบโฮสต์ พอร์ต และเครือข่ายของคุณ',
      sshErrAuth:
        'ยืนยันตัวตน SSH ไม่สำเร็จ โหลดคีย์ลงใน ssh-agent ด้วย ssh-add หรือกำหนด IdentityFile ใน ~/.ssh/config — Hermes เรียก ssh แบบไม่โต้ตอบ',
      sshErrHostKey:
        'คีย์โฮสต์เปลี่ยนไปจากการเชื่อมต่อครั้งล่าสุด ตรวจสอบว่าการเปลี่ยนแปลงนี้ถูกต้องก่อน แล้วจึงเรียก ssh-keygen -R <host> และเชื่อมต่อใหม่',
      sshErrNotInstalled:
        'ยังไม่ได้ติดตั้ง Hermes บนโฮสต์ระยะไกล ติดตั้งด้วย curl -fsSL https://hermes-agent.nousresearch.com/install.sh | sh บนเครื่องนั้น หรือกำหนดพาธ Hermes',
      sshErrPlatform: 'ไม่รองรับแพลตฟอร์มระยะไกลนี้ โหมด SSH ของ Hermes Desktop รองรับโฮสต์ Linux, macOS และ Windows',
      sshErrTimeout: 'การเชื่อมต่อ SSH หมดเวลา โฮสต์อาจไม่สามารถติดต่อได้หรืออยู่ในโหมดพัก',
      sshErrUpdateRequired: 'อัปเดต Hermes บนโฮสต์ระยะไกลก่อนที่จะเชื่อมต่อกับเดสก์ท็อป SSH',
      sshErrInteractiveAuth:
        'Tailscale SSH ต้องยืนยันผ่านเบราว์เซอร์ เรียก `ssh <host> true` ในเทอร์มินัล แล้วทำขั้นตอนยืนยันให้เสร็จก่อนลองอีกครั้ง เพราะ Hermes เรียก SSH แบบไม่โต้ตอบ',
      sshErrUnknown: 'การเชื่อมต่อ SSH ล้มเหลว'
    },
    keys: {
      loading: 'กำลังโหลดคีย์และข้อมูลรับรอง API...',
      failedLoad: 'ไม่สามารถโหลดคีย์ API',
      empty: 'ยังไม่มีการกำหนดค่าในหมวดหมู่นี้'
    },
    search: {
      placeholder: 'ค้นหาการตั้งค่าทั้งหมด...',
      pill: 'ค้นหา'
    },
    profileScope: {
      appliesTo: 'นำไปใช้กับ',
      editsProfile: profile => `การเปลี่ยนแปลงในหน้านี้มีผลกับโปรไฟล์ “${profile}”`
    },
    mcp: {
      loading: 'กำลังโหลดเซิร์ฟเวอร์ MCP...',
      invalidJson: 'MCP JSON ไม่ถูกต้อง',
      saveFailed: 'บันทึกล้มเหลว',
      removeFailed: 'ลบไม่สำเร็จ',
      reloadFailed: 'การรีโหลด MCP ล้มเหลว',
      savedTitle: 'บันทึกเซิร์ฟเวอร์ MCP แล้ว',
      savedMessage: name => `${name} มีผลหลังจากโหลด MCP ซ้ำ`,
      disabled: 'ปิดการใช้งาน',
      name: 'ชื่อ',
      serverJson: 'JSON ของเซิร์ฟเวอร์',
      remove: 'นำออก',
      test: 'ทดสอบการเชื่อมต่อ',
      catalogLoading: 'กำลังโหลดแค็ตตาล็อก MCP...',
      catalogInstallFailed: name => `ติดตั้ง ${name} ไม่สำเร็จ`,
      catalogEnvRequired: 'กรอกค่าที่จำเป็นก่อนการติดตั้ง',
      capabilitySummary: (tools, prompts, resources) =>
        `เปิดใช้งาน ${[`${tools} เครื่องมือ`, ...(prompts ? [`${prompts} พรอมป์ต์`] : []), ...(resources ? [`ทรัพยากร ${resources}`] : [])].join(', ')} แล้ว`,
      costTokens: tokens => `ประมาณ ${tokens} โทเคน/การเรียก`,
      usage30d: uses => `ใช้ ${uses} ครั้ง/30 วัน`,
      statusConnecting: 'กำลังเชื่อมต่อ…',
      statusNeedsAuth: 'ต้องยืนยันตัวตน',
      statusError: 'ข้อผิดพลาด',
      statusOff: 'ปิด',
      allServers: 'เซิร์ฟเวอร์ทั้งหมด',
      authenticatedTitle: 'ยืนยันตัวตนแล้ว',
      authenticatedMessage: (server, count) => `${server}: ${count} เครื่องมือ`,
      authenticate: 'ตรวจสอบสิทธิ์',
      noOutput: 'ยังไม่มีผลลัพธ์',
      deepLinkTitle: 'เพิ่มเซิร์ฟเวอร์ MCP หรือไม่',
      deepLinkDescription:
        'ลิงก์ขอให้เพิ่มเซิร์ฟเวอร์ MCP นี้ใน Hermes ตรวจสอบการกำหนดค่าด้านล่าง — มาจากลิงก์ ไม่ใช่จาก Hermes',
      deepLinkStdioWarning:
        'เซิร์ฟเวอร์นี้รันกระบวนการภายในเครื่องของคุณโดยใช้คำสั่งที่แสดงด้านล่าง ดำเนินการต่อหากคุณเชื่อถือแหล่งที่มาเท่านั้น',
      deepLinkConfirm: 'เพิ่มเซิร์ฟเวอร์',
      deepLinkNameInvalid: 'ชื่อมีความยาว 1–64 ตัวอักษร ใช้ตัวอักษร ตัวเลข จุด ขีดกลาง หรือขีดล่าง',
      deepLinkNameConflict: name => `มีเซิร์ฟเวอร์ชื่อ ${name} อยู่แล้ว — เลือกชื่ออื่นหรือยกเลิก`,
      deepLinkErrorTitle: 'ลิงก์การติดตั้ง MCP ถูกปฏิเสธ',
      deepLinkErrorName: 'ชื่อเซิร์ฟเวอร์ของลิงก์หายไปหรือไม่ถูกต้อง',
      deepLinkErrorConfig: 'การกำหนดค่าของลิงก์ไม่ใช่ JSON ที่เข้ารหัส base64 ที่ถูกต้อง',
      deepLinkErrorShape: 'การกำหนดค่าต้องเป็นอ็อบเจ็กต์ JSON ที่มีฟิลด์สตริง `url` หรือ `command`',
      deepLinkErrorUrl: 'อนุญาตเฉพาะ URL เซิร์ฟเวอร์ http:// และ https:// เท่านั้น',
      deepLinkErrorTooLarge: 'ข้อมูลการตั้งค่าเกินขีดจำกัด 32KB'
    },
    model: thModelSettings,
    localModels: thLocalModels,
    billing: {
      perMonth: amount => `${amount}/เดือน`,
      creditsPerMonth: amount => `เครดิต ${amount}/เดือน`,
      usageLabel: label => `การใช้งาน ${label}`,
      freeTier: {
        signIn: 'เข้าสู่ระบบ',
        title: 'คุณกำลังใช้ Nous ระดับใช้ฟรี',
        message: 'เข้าสู่ระบบด้วยบัญชี Nous เพื่อปลดล็อกโมเดลและเครื่องมือเพิ่มเติม',
        caption:
          'ใช้โมเดล nous/welcome พร้อมตัวเชื่อมต่อที่รวมไว้ เมื่อเข้าสู่ระบบ ตัวเชื่อมต่อเดิมจะยังอยู่ และคุณจะใช้เครื่องมือที่ต้องมีบัญชีกับโมเดลอื่นทั้งหมดได้',
        name: 'Nous · ระดับใช้ฟรี',
        footnote:
          'ระดับใช้ฟรีไม่มียอดคงเหลือหรือการชำระเงิน ส่วนการเรียกเก็บเงินและการใช้งานจะแสดงเมื่อคุณเข้าสู่ระบบด้วยบัญชี Nous',
        plan: 'ระดับใช้ฟรี',
        model: 'โมเดล',
        connectors: 'ตัวเชื่อมต่อ',
        included: 'รวมอยู่ด้วย'
      },
      amountValidation: {
        reloadTo: 'เติมให้ถึงยอด',
        greaterThanThreshold: 'ยอดเป้าหมายหลังเติมต้องสูงกว่าเกณฑ์เริ่มเติม',
        decimal: label => `${label}: ป้อนจำนวนเงินดอลลาร์โดยมีทศนิยมไม่เกิน 2 ตำแหน่ง`,
        positive: label => `${label}: จำนวนเงินต้องมากกว่า $0`,
        minimum: (label, amount) => `${label}: ขั้นต่ำคือ ${amount}`,
        maximum: (label, amount) => `${label}: สูงสุดคือ ${amount}`
      },
      stepUp: {
        openVerification: 'เปิดหน้าการยืนยัน',
        dismiss: 'ยกเลิก',
        waiting: 'กำลังรอลิงก์การยืนยัน...',
        verify: 'ยืนยันเพื่อดำเนินการต่อ',
        deniedTitle: 'ไม่ได้อนุญาตหลังยืนยันตัวตน',
        deniedBody: 'ยืนยันตัวตนเสร็จแล้ว แต่ไม่ได้อนุญาตการใช้จ่ายระยะไกลสำหรับเทอร์มินัลนี้',
        successTitle: 'การยืนยันเสร็จสมบูรณ์',
        successBody: 'อนุญาตการใช้จ่ายระยะไกลสำหรับเทอร์มินัลนี้แล้ว'
      },
      charge: {
        added: amount => (amount ? `เพิ่ม $${amount} แล้ว` : 'เพิ่มเครดิตแล้ว'),
        failedTitle: 'การเรียกเก็บเงินล้มเหลว',
        unconfirmedTitle: 'ยังยืนยันผลการเรียกเก็บเงินไม่ได้',
        unconfirmedBody: message =>
          `${message} ยังยืนยันผลการเรียกเก็บเงินครั้งล่าสุดไม่ได้ ตรวจสอบยอดคงเหลือและประวัติก่อนลองอีกครั้ง`,
        checkTitle: 'ไม่สามารถตรวจสอบการเรียกเก็บเงินได้',
        checkBody: 'ไม่สามารถตรวจสอบการเรียกเก็บเงินได้',
        untrackedTitle: 'ไม่สามารถติดตามการเรียกเก็บเงินได้',
        untrackedBody: 'บริการเรียกเก็บเงินรับคำขอแล้ว แต่ไม่ได้ส่ง ID รายการกลับมา',
        timeoutTitle: 'ยังคงประมวลผลหลังจากผ่านไป 5 นาที',
        timeoutBody: 'รายการอาจยังอยู่ระหว่างชำระเงิน ตรวจสอบในพอร์ทัลก่อนลองอีกครั้ง',
        authenticationRequired: 'ธนาคารต้องการให้ยืนยันตัวตน (3DS) ทำขั้นตอนในพอร์ทัลให้เสร็จเพื่อชำระรายการนี้',
        expired: 'บัตรของคุณหมดอายุแล้ว อัปเดตบนพอร์ทัล',
        declined: 'บัตรของคุณถูกปฏิเสธ ลองใช้บัตรอื่นในพอร์ทัล',
        failedBody: reason => `เรียกเก็บเงินไม่สำเร็จ (${reason})`
      },
      title: 'การเรียกเก็บเงิน',
      preview: 'ดูตัวอย่าง',
      summary: {
        balance: 'ยอดคงเหลือ',
        plan: 'แผน',
        autoRefill: 'เติมเงินอัตโนมัติ'
      },
      sections: {
        invoices: 'ใบแจ้งหนี้',
        plan: 'แผน',
        paymentAndCredits: 'การชำระเงินและเครดิต',
        usage: 'การใช้งาน'
      },
      usage: {
        title: 'การใช้งาน'
      },
      buyCredits: {
        customAmount: 'จำนวนเครดิตที่กำหนดเอง',
        title: 'ซื้อเครดิตตอนนี้',
        buyButton: 'ซื้อ',
        processing: 'กำลังประมวลผล… ตรวจสอบผลการชำระเงิน',
        added: amount => `เพิ่ม ${amount} แล้ว อัปเดตยอดคงเหลือแล้ว`,
        retry: 'ลองอีกครั้ง',
        openPortal: 'เปิดพอร์ทัล'
      },
      plan: {
        title: 'แผน',
        changePlan: 'เปลี่ยนแผน',
        viewPlans: 'ดูแผน',
        backAria: 'กลับไปที่การเรียกเก็บเงิน',
        current: 'แผนปัจจุบัน',
        scheduled: 'กำหนดเวลาแล้ว',
        empty: 'ขณะนี้ไม่มีแผนอื่นให้เปลี่ยน',
        undo: 'เลิกทำ',
        undoing: 'กำลังเลิกทำ...',
        downgrade: 'ดาวน์เกรด',
        confirmDowngrade: 'ยืนยันการดาวน์เกรด',
        tryAgain: 'ลองอีกครั้ง',
        checkingChange: 'กำลังตรวจสอบการเปลี่ยนแปลงนี้...',
        cannotChange: 'การเปลี่ยนแปลงนั้นไม่สามารถทำได้ที่นี่',
        alreadyOn: name => `คุณใช้แผน ${name} อยู่แล้ว จึงไม่มีการเปลี่ยนแปลง`,
        notScheduleable: 'ไม่สามารถกำหนดเวลาการเปลี่ยนแปลงนี้ได้ที่นี่',
        scheduling: 'กำลังกำหนดเวลา...',
        cancel: 'ยกเลิก',
        effectScheduled: (targetName, effectiveAt, creditsDelta) =>
          `เปลี่ยนเป็น ${targetName} — มีผล ${effectiveAt} ยังไม่เรียกเก็บเงินในตอนนี้ คุณใช้แผนปัจจุบันต่อได้จนถึงเวลานั้น ${creditsDelta ? ` การเปลี่ยนแปลงเครดิตรายเดือน: ${creditsDelta}` : ''}`
      },
      keepGoingOnCredits: {
        title: 'ใช้เครดิตเพื่อทำงานต่อ',
        description: 'ใช้เครดิตของคุณเมื่อใช้สิทธิ์ที่รวมในแผนหมด หากปิด Hermes จะรอจนกว่าสิทธิ์จะรีเซ็ต',
        approveInBrowser: 'อนุญาตการใช้จ่ายระยะไกลในเบราว์เซอร์เพื่อเปลี่ยนค่านี้ โดยจะมีผลทันทีที่อนุญาต',
        openAgain: 'เปิดอีกครั้ง',
        cancel: 'ยกเลิก',
        approvedRetry: 'อนุญาตการใช้จ่ายระยะไกลแล้ว แต่บันทึกการเปลี่ยนแปลงไม่สำเร็จ',
        tryAgain: 'ลองอีกครั้ง'
      },
      autoReload: {
        threshold: 'เกณฑ์',
        thresholdAria: 'เกณฑ์การเติมเงินอัตโนมัติ',
        reloadTo: 'เติมให้ถึงยอด',
        reloadToAria: 'ยอดเป้าหมายหลังเติมเงินอัตโนมัติ',
        turnOffConfirm: 'ปิดการเติมเงินอัตโนมัติใช่ไหม',
        turnOff: 'ปิด',
        disable: 'ปิดใช้งาน',
        updated: 'อัปเดตการเติมเงินอัตโนมัติแล้ว',
        turnedOff: 'ปิดการเติมเงินอัตโนมัติแล้ว',
        manage: 'จัดการ',
        save: 'บันทึก',
        saving: 'กำลังบันทึก...',
        cancel: 'ยกเลิก'
      },
      state: {
        notice: {
          loggedOut: {
            title: 'เชื่อมต่อบัญชี Nous ของคุณ',
            message: 'เข้าสู่ระบบด้วยบัญชี Nous ของคุณเพื่อดูยอดคงเหลือ แผน และการใช้งานของคุณที่นี่',
            action: 'เข้าสู่ระบบ'
          },
          openPortal: 'เปิดพอร์ทัล \u2197',
          noCard: {
            title: 'ยังไม่ได้บันทึกวิธีชำระเงิน',
            message: 'ยังซื้อเครดิตหรือเติมเงินอัตโนมัติไม่ได้จนกว่าจะบันทึกบัตร เพิ่มบัตรได้ในพอร์ทัล',
            action: 'เพิ่มบัตร \u2197'
          }
        },
        paymentMethod: {
          title: 'วิธีการชำระเงิน',
          description: 'จัดการบัตรที่ใช้สำหรับการเติมเงินและการต่ออายุสมาชิก',
          addAction: 'เพิ่มวิธีการชำระเงิน',
          updateAction: 'อัปเดต',
          provenance: {
            autoRefill: 'บัตรสำหรับเติมเงินอัตโนมัติ',
            customerDefault: 'บัตรเริ่มต้นของบัญชี',
            subPin: 'บัตรสำหรับค่าสมาชิก',
            suffix: label => ` - ${label}`
          }
        },
        buyCredits: {
          description: 'เรียกเก็บจากบัตรครั้งเดียว แล้วเพิ่มเข้ายอดคงเหลือของคุณวันนี้'
        },
        autoRefill: {
          title: 'เติมเมื่อยอดเหลือน้อย',
          genericDescription: 'เติมยอดคงเหลือเมื่อยอดลดต่ำกว่าเกณฑ์ที่ตั้งไว้',
          offPill: 'ปิด',
          enabledPill: 'เปิดใช้งาน',
          notAvailablePill: '—',
          manageCaption: 'จัดการการเติมเงินอัตโนมัติจากพอร์ทัล',
          turnOnCaption: 'เปิดการเติมเงินอัตโนมัติจากพอร์ทัล',
          chargesDescription: (reloadTo, threshold) =>
            `เรียกเก็บ ${reloadTo} อัตโนมัติเมื่อยอดคงเหลือต่ำกว่า ${threshold}`,
          distinctCardCaption: cardLabel => `การเติมเงินอัตโนมัติเรียกเก็บจาก ${cardLabel} — ตรวจสอบให้ตรงกันในพอร์ทัล`,
          distinctCardFallback: 'บัตรอื่น',
          reconcileAction: 'ตรวจสอบให้ตรงกัน ↗'
        },
        usage: {
          subscriptionCredits: {
            title: 'เครดิตการสมัครสมาชิก',
            barLabel: 'เครดิตการสมัครสมาชิกที่เหลืออยู่',
            captionResets: date => `รีเซ็ต ${date}`,
            valueOf: (remaining, monthly) => `เหลือ ${remaining} จาก ${monthly}`,
            valueOver: (remaining, monthly, over) => `เหลือ ${remaining} จาก ${monthly} · เกิน ${over}`
          },
          topupCredits: {
            title: 'เครดิตเติมเงิน',
            caption: 'ไม่หมดอายุ'
          },
          monthlyCap: {
            title: 'ขีดจำกัดการใช้จ่ายรายเดือน',
            barLabel: 'ขีดจำกัดการใช้จ่ายรายเดือนที่ใช้ไป',
            captionDefault: 'เพดานเริ่มต้น',
            captionSpending: 'การใช้จ่ายระยะไกลรายเดือน',
            valueUsed: (spent, limit) => `ใช้แล้ว ${spent} จาก ${limit}`
          },
          window: {
            today: 'วันนี้',
            week: 'สัปดาห์นี้',
            month: 'เดือนนี้',
            topTier: 'โมเดลขนาดใหญ่ (รายเดือน)',
            barLabel: title => `สิทธิ์ในแผนที่ใช้ไป: ${title}`,
            captionPaused: 'หยุดชั่วคราว: การชำระเงินค่าสมัครสมาชิกล้มเหลว',
            captionPausedOther: 'หยุดชั่วคราว: ดูการเรียกเก็บเงินในพอร์ทัล',
            captionTopTierUsedUp: 'ใช้สิทธิ์รายเดือนหมดแล้ว ส่วนที่เกินจะใช้เครดิต',
            captionTopTierUsedUpKeepGoingOff: 'ใช้สิทธิ์รายเดือนหมดแล้ว โมเดลอื่นที่รวมในแผนยังใช้ได้',
            captionResetsIn: duration => `รีเซ็ตใน ${duration}`,
            captionIncluded: 'สิทธิ์การใช้งานที่รวมในแผน',
            valueUsed: percent => `ใช้แล้ว ${percent}`
          }
        },
        planCard: {
          freeTier: 'ฟรี',
          chooseAction: 'เลือก \u2197',
          adjustPlanAction: 'ปรับแผน \u2197',
          unavailableCaption: 'ไม่มีข้อมูลรายละเอียดสมาชิกในขณะนี้ แต่ยังเปิดพอร์ทัลได้',
          downgradeCaption: (tierName, when) => `เปลี่ยนเป็น ${tierName} ในวันที่ ${when}`,
          cancellationCaption: when => `ยกเลิกในวันที่ ${when}`,
          renewsCaption: date => `ต่ออายุ ${date}`,
          noSubscriptionCaption: 'ไม่มีสมาชิกที่ใช้งานอยู่ — โมเดลแบบเสียค่าบริการจะหักจากเครดิตเติมเงิน'
        }
      },
      errors: {
        consentRequired: {
          title: 'จำเป็นต้องยืนยันบัตร',
          message: 'ยืนยันบัตรนี้ในพอร์ทัลเพื่อให้เรียกเก็บเงินผ่านเทอร์มินัลได้'
        },
        insufficientScope: {
          title: 'ต้องอนุญาตการใช้จ่ายระยะไกล',
          message: 'ต้องอนุญาตการใช้จ่ายระยะไกลก่อน เริ่มขั้นตอนเติมเงินเพื่ออนุญาต แล้วลองอีกครั้ง'
        },
        remoteSpendingRevoked: {
          title: 'การใช้จ่ายระยะไกลถูกหยุด',
          messageByAdmin: 'ผู้ดูแลระบบหยุดการใช้จ่ายระยะไกลสำหรับเทอร์มินัลนี้',
          messageBySelf: 'คุณหยุดการใช้จ่ายระยะไกลสำหรับเทอร์มินัลนี้'
        },
        remoteSpendingReconnect: who => `${who} เชื่อมต่อใหม่จากการตั้งค่า -> เกตเวย์เพื่ออนุญาตอุปกรณ์นี้อีกครั้ง`,
        sessionRevoked: {
          title: 'เซสชันเข้าสู่ระบบถูกยกเลิก',
          message: 'เซสชันเข้าสู่ระบบของคุณถูกยกเลิกแล้ว เข้าสู่ระบบอีกครั้งที่ การตั้งค่า → เกตเวย์'
        },
        cliBillingDisabled: {
          title: 'การใช้จ่ายระยะไกลปิดอยู่',
          message:
            'การใช้จ่ายระยะไกลปิดอยู่สำหรับบัญชีนี้ — ผู้ดูแลระบบการเรียกเก็บเงินสามารถเปิดใช้งานได้จากหน้า Hermes เอเจนต์ของพอร์ทัล'
        },
        roleRequired: {
          title: 'ต้องมีบทบาทผู้ดูแลระบบ',
          message: 'เฉพาะผู้ดูแลหรือเจ้าขององค์กรเท่านั้นที่เพิ่มเงินได้ ติดต่อผู้ดูแลหรือจัดการในพอร์ทัล'
        },
        idempotencyConflict: {
          title: 'เริ่มต้นการเติมเงินใหม่',
          message: '\uD83D\uDD34 คีย์ของรายการเรียกเก็บเงินนี้เคยใช้กับจำนวนเงินอื่นแล้ว เริ่มรายการเติมเงินใหม่'
        },
        noPaymentMethod: {
          title: 'ไม่มีบัตรที่บันทึกไว้',
          message:
            '\uD83D\uDCB3 ยังไม่มีบัตรที่บันทึกไว้สำหรับการเรียกเก็บเงินผ่านเทอร์มินัล เพิ่มบัตรในพอร์ทัล ' +
            '(การซื้อเครดิตแบบครั้งเดียวไม่สามารถบันทึกบัตรที่ใช้ซ้ำได้)'
        },
        orgAccessDenied: {
          title: 'การเข้าถึงองค์กรถูกปฏิเสธ',
          message: 'โทเคนนี้ไม่ได้ผูกกับองค์กรที่คุณมีสิทธิ์จัดการ'
        },
        monthlyCapExceeded: {
          title: 'ถึงขีดจำกัดการใช้จ่ายรายเดือนแล้ว',
          messageReached: '\uD83D\uDD34 ถึงขีดจำกัดการใช้จ่ายรายเดือนแล้ว',
          messageHeadroom: remaining =>
            `\uD83D\uDD34 ถึงขีดจำกัดการใช้จ่ายรายเดือนแล้ว — ยังเหลือวงเงินให้ใช้ได้ $${remaining}`
        },
        rateLimited: {
          title: 'มีคำขอเรียกเก็บเงินถี่เกินไป',
          message: mins =>
            mins > 0
              ? `\uD83D\uDFE1 มีคำขอเรียกเก็บเงินถี่เกินไป (ลองอีกครั้งในประมาณ ${mins} นาที) ไม่ใช่การชำระเงินล้มเหลว`
              : '\uD83D\uDFE1 มีคำขอเรียกเก็บเงินถี่เกินไป ไม่ใช่การชำระเงินล้มเหลว'
        },
        stripeUnavailable: {
          title: 'Stripe กำลังประสบปัญหา',
          message: mins =>
            mins > 0
              ? `Stripe กำลังประสบปัญหา — ลองอีกครั้งใน ~${mins} นาที`
              : 'Stripe กำลังประสบปัญหา — โปรดลองอีกครั้งเร็วๆ นี้'
        },
        upgradeCapExceeded: {
          title: 'ถึงขีดจำกัดการเปลี่ยนแปลงแผนรายวันแล้ว',
          message: 'ถึงขีดจำกัดการเปลี่ยนแปลงแผนรายวันแล้ว โปรดลองอีกครั้งพรุ่งนี้'
        },
        endpointUnavailable: {
          title: 'ปลายทางการเรียกเก็บเงินไม่พร้อมใช้งาน',
          message: 'ปลายทางเรียกเก็บเงินตอบกลับด้วยข้อมูลที่ไม่ใช่ JSON (ระบบที่ติดตั้งอยู่อาจยังไม่รองรับ)'
        },
        timeout: {
          title: 'คำขอเรียกเก็บเงินหมดเวลา',
          message: 'คำขอเรียกเก็บเงินหมดเวลา'
        },
        transport: {
          title: 'การเชื่อมต่อการเรียกเก็บเงินล้มเหลว',
          message: 'คำขอเรียกเก็บเงินล้มเหลวก่อนที่จะถึงเกตเวย์'
        },
        default: {
          title: 'คำขอเรียกเก็บเงินล้มเหลว',
          message: 'คำขอเรียกเก็บเงินล้มเหลว'
        }
      }
    },
    providers: {
      connectAccount: 'เชื่อมต่อบัญชี',
      haveApiKey: 'มีคีย์ API แทนหรือเปล่า?',
      intro:
        'เข้าสู่ระบบด้วยบัญชีที่สมัครแพ็กเกจไว้ โดยไม่ต้องคัดลอกคีย์ API Hermes จะเปิดขั้นตอนเข้าสู่ระบบผ่านเบราว์เซอร์ให้จากในแอปนี้',
      connected: 'เชื่อมต่อแล้ว',
      collapse: 'ยุบ',
      connectAnother: 'เชื่อมต่อผู้ให้บริการรายอื่น',
      otherProviders: 'ผู้ให้บริการโมเดลอื่น',
      disconnect: 'ตัดการเชื่อมต่อ',
      disconnectInTerminal: 'ตัดการเชื่อมต่อ (รันคำสั่งลบในเทอร์มินัล)',
      removeConfirm: provider => `ลบ ${provider} ออกไหม`,
      removeExternalGeneric: provider => `${provider} ได้รับการจัดการโดย CLI ของตัวเอง — ลบผ่าน CLI นั้น`,
      removeKeyManaged: provider => `${provider} ได้รับการกำหนดค่าจากคีย์ API ลบออกจากคีย์ API`,
      removeTerminalConfirm: (provider, command) =>
        `ยกเลิกการเชื่อมต่อ ${provider} หรือไม่ ซึ่งจะรัน "${command}" ในเทอร์มินัลเพื่อล้างข้อมูลรับรอง`,
      removeTerminalRunning: provider => `กำลังเรียกใช้การตัดการเชื่อมต่อ ${provider} ในเทอร์มินัล...`,
      removedTitle: 'ลบบัญชีแล้ว',
      removedMessage: provider => `${provider} ถูกลบออก`,
      failedRemove: provider => `ไม่สามารถลบ ${provider} ได้`,
      noProviderKeys: 'ไม่มีคีย์ API ของผู้ให้บริการที่ใช้ได้',
      searchKeys: 'ค้นหาผู้ให้บริการ…',
      noKeysMatch: 'ไม่มีผู้ให้บริการที่ตรงกับการค้นหา',
      localEndpoint: {
        title: 'ปลายทางในเครื่องหรือที่กำหนดเอง',
        description: 'เชื่อมต่อ Hermes กับปลายทางที่รองรับ API แบบ OpenAI (Zyphra, vLLM, llama.cpp, Ollama ฯลฯ)'
      },
      loading: 'กำลังโหลดผู้ให้บริการโมเดล…'
    },
    sessions: {
      loading: 'กำลังโหลดบทสนทนาที่เก็บถาวร…',
      archivedTitle: 'บทสนทนาที่เก็บถาวร',
      archivedIntro:
        'แชตที่เก็บถาวรถูกซ่อนจากแถบด้านข้าง แต่ยังเก็บข้อความทั้งหมดไว้ กด Alt/\u2325+Shift ค้างแล้วคลิกแชตในแถบด้านข้างเพื่อเก็บถาวร',
      emptyArchivedTitle: 'ไม่มีสิ่งใดถูกเก็บถาวร',
      emptyArchivedDesc: 'แชตที่คุณเลือกเก็บถาวรจะย้ายมาอยู่ที่นี่',
      unarchive: 'ยกเลิกการเก็บถาวร',
      deletePermanently: 'ลบอย่างถาวร',
      messages: count => `${count} ข้อความ`,
      restored: 'คืนค่าแล้ว',
      deleteConfirm: title => `ลบ "${title}" อย่างถาวรหรือไม่ สิ่งนี้ไม่สามารถยกเลิกได้`,
      autoArchiveTitle: 'เก็บแชตถาวรอัตโนมัติ',
      autoArchiveDesc:
        'เก็บแชตที่ไม่ได้ใช้งานมาระยะหนึ่งไว้ถาวรโดยอัตโนมัติ ยกเว้นแชตที่ปักหมุด ไม่มีข้อความถูกลบ แชตเพียงย้ายมาอยู่ที่นี่',
      autoArchiveDaysLabel: 'เก็บถาวรหลังจาก',
      autoArchiveDaysUnit: 'วันที่ไม่มีการใช้งาน',
      autoArchiveFailed: 'ไม่สามารถอัปเดตการเก็บถาวรอัตโนมัติ',
      defaultDirTitle: 'โฟลเดอร์โปรเจกต์เริ่มต้น',
      defaultDirDesc:
        'บทสนทนาใหม่จะเริ่มในโฟลเดอร์นี้ เว้นแต่คุณเลือกโฟลเดอร์อื่น หากไม่ตั้งค่า จะใช้โฟลเดอร์หลักของบัญชีผู้ใช้',
      defaultDirUpdated: shortcut =>
        `อัปเดตโฟลเดอร์โปรเจกต์เริ่มต้นแล้ว — เริ่มแชตใหม่${shortcut ? ` (${shortcut})` : ''} เพื่อใช้ค่านี้`,
      defaultsTo: label => `ค่าเริ่มต้นคือ ${label}`,
      change: 'เปลี่ยน',
      choose: 'เลือก',
      clear: 'ล้าง',
      notSet: 'ไม่ได้ตั้งค่า',
      failedLoad: 'โหลดบทสนทนาที่เก็บถาวรไม่ได้',
      unarchiveFailed: 'ยกเลิกการเก็บถาวรล้มเหลว',
      deleteFailed: 'ลบไม่สำเร็จ',
      updateDirFailed: 'ไม่สามารถอัปเดตไดเรกทอรีเริ่มต้นได้',
      clearDirFailed: 'ไม่สามารถล้างไดเรกทอรีเริ่มต้นได้'
    },
    toolsets: {
      loadingConfig: 'กำลังโหลดการตั้งค่า',
      savedTitle: 'บันทึกข้อมูลรับรองแล้ว',
      savedMessage: key => `อัปเดต ${key} แล้ว`,
      removedTitle: 'นำข้อมูลรับรองออกแล้ว',
      removedMessage: key => `นำ ${key} ออกแล้ว`,
      failedSave: key => `บันทึก ${key} ไม่สำเร็จ`,
      failedRemove: key => `ไม่สามารถลบ ${key} ได้`,
      failedReveal: key => `แสดงค่า ${key} ไม่สำเร็จ`,
      removeConfirm: key => `ลบ ${key} ออกจาก .env หรือไม่`,
      set: 'ตั้งค่าแล้ว',
      notSet: 'ไม่ได้ตั้งค่า',
      selectedTitle: 'เลือกผู้ให้บริการแล้ว',
      selectedMessage: provider => `${provider} ใช้งานได้แล้ว`,
      failedSelect: provider => `ไม่สามารถเลือก ${provider}`,
      failedLoad: 'โหลดการตั้งค่าเครื่องมือไม่สำเร็จ',
      noProviderOptions: 'ชุดเครื่องมือนี้ไม่มีผู้ให้บริการให้เลือก เปิดใช้งานได้ทันทีด้วยการตั้งค่าปัจจุบัน',
      noProviders: 'ขณะนี้ไม่มีผู้ให้บริการสำหรับชุดเครื่องมือนี้',
      ready: 'พร้อม',
      needsSignIn: 'จำเป็นต้องเข้าสู่ระบบ',
      needsSetup: 'ต้องตั้งค่า',
      activeBackend: 'ใช้งานอยู่',
      activeBackendHint: 'นี่คือแบ็กเอนด์ที่ใช้งานอยู่ของคุณ',
      useBackend: 'ใช้แบ็กเอนด์นี้',
      nousIncluded: 'รวมอยู่กับการสมัครสมาชิก Nous — เข้าสู่ระบบด้วยบัญชี Nous ของคุณเพื่อเปิดใช้งาน',
      nousAuthNeededTitle: 'เข้าสู่ระบบด้วยบัญชี Nous ของคุณ',
      nousAuthNeededMessage: provider =>
        `${provider} ได้รับการบันทึกแล้ว แต่จะใช้งานได้เมื่อคุณเข้าสู่ระบบด้วยบัญชี Nous ของคุณเท่านั้น`,
      nousAuthSignIn: 'เข้าสู่ระบบ',
      nousAuthDoneTitle: 'เชื่อมต่อบัญชี Nous แล้ว',
      nousAuthDoneMessage: 'แบ็กเอนด์ที่รวมในสมาชิกของคุณพร้อมใช้งานแล้ว',
      nousAuthFailed: 'การเข้าสู่ระบบ Nous ไม่เสร็จสมบูรณ์',
      nousAuthFailedMessage: 'ลองอีกครั้ง',
      nousAuthTryAgain: 'ลองอีกครั้ง',
      noApiKeyRequired: 'ไม่ต้องใช้คีย์ API',
      postSetupHint: step =>
        `แบ็กเอนด์นี้ต้องติดตั้งส่วนประกอบครั้งแรก (${step}) โดยทำงานบนเครื่องนี้และอาจใช้เวลาสักครู่`,
      postSetupInstalledHint: 'ติดตั้งแล้ว เรียกใช้การตั้งค่าอีกครั้งเฉพาะเมื่อมีบางอย่างเสียหาย',
      postSetupRun: 'เรียกใช้การตั้งค่า',
      postSetupRerun: 'เรียกใช้การตั้งค่าอีกครั้ง',
      postSetupInstalled: 'ติดตั้งแล้ว',
      postSetupRunning: 'กำลังติดตั้ง…',
      postSetupStarting: 'กำลังเริ่ม...',
      postSetupCompleteTitle: 'การตั้งค่าเสร็จสมบูรณ์',
      postSetupCompleteMessage: step => `ติดตั้ง ${step} แล้ว`,
      postSetupErrorTitle: 'การตั้งค่าเสร็จสิ้นโดยมีข้อผิดพลาด',
      postSetupErrorMessage: step =>
        `การตั้งค่า ${step} ไม่เสร็จสิ้น เปิดบันทึกเพื่อดูสาเหตุ จากนั้นเรียกใช้การตั้งค่าอีกครั้ง`,
      postSetupOpenLogs: 'เปิดบันทึกการทำงาน',
      postSetupRunAgain: 'เรียกใช้อีกครั้ง',
      postSetupFailed: step => `เรียกใช้การตั้งค่า ${step} ไม่สำเร็จ`,
      webSearchActive: backend => `ค้นหา: ${backend}`,
      webExtractActive: backend => `ดึงเนื้อหา: ${backend}`,
      webCapabilityUnset: 'ไม่ได้ตั้งค่า',
      webUseForSearch: 'ใช้สำหรับการค้นหา',
      webUseForExtract: 'ใช้ดึงเนื้อหา',
      webUsedForSearch: 'ระบบค้นหา',
      webUsedForExtract: 'ระบบดึงเนื้อหา',
      webCapabilitySelectedMessage: (provider, capability) =>
        `ตอนนี้ใช้ ${provider} สำหรับความสามารถเว็บ: ${capability}`,
      failedSelectCapability: provider => `ไม่สามารถตั้งค่า ${provider}`,
      loadingModels: 'กำลังโหลดแค็ตตาล็อกโมเดล...',
      modelSectionTitle: 'โมเดล',
      modelCount: count => `${count} โมเดล`,
      modelInUse: 'กำลังใช้งาน',
      modelDefault: 'ค่าเริ่มต้น',
      modelInactiveHint: 'เลือกแบ็กเอนด์นี้ก่อนเพื่อเปลี่ยนโมเดล',
      modelSelectedTitle: 'เลือกโมเดลแล้ว',
      modelSelectedMessage: model => `${model} ใช้กับบทสนทนาใหม่`,
      failedSelectModel: model => `ไม่สามารถเลือก ${model}`,
      terminalBackend: {
        sectionTitle: 'ระบบเรียกใช้คำสั่ง',
        loading: 'กำลังตรวจสอบระบบเรียกใช้คำสั่ง…',
        failedLoad: 'ไม่สามารถโหลดแบ็กเอนด์เทอร์มินัลได้',
        ready: 'พร้อม',
        needsSetup: 'ต้องตั้งค่า',
        unavailable: 'ไม่พร้อมใช้งาน',
        inUse: 'กำลังใช้งาน',
        selectedTitle: 'เลือกแบ็กเอนด์แล้ว',
        selectedMessage: backend => `ตั้งให้คำสั่งเทอร์มินัลทำงานผ่าน ${backend} แล้ว มีผลกับบทสนทนาใหม่`,
        failedSelect: backend => `ไม่สามารถเลือก ${backend}`,
        needsSetupHint: 'เลือกแบ็กเอนด์นี้อยู่ แต่ยังตั้งค่าไม่ครบ คำสั่งจะล้มเหลวจนกว่าจะตั้งค่าเสร็จ',
        needsSetupConfirmTitle: backend => `ยังต้องการเลือก ${backend} หรือไม่?`,
        needsSetupConfirmDescription: detail =>
          `${detail} บทสนทนาที่เริ่มหลังการเปลี่ยนแปลงนี้จะใช้เครื่องมือเทอร์มินัลและไฟล์ไม่ได้จนกว่าจะตั้งค่าเสร็จ`,
        needsSetupConfirmDescriptionGeneric:
          'แบ็กเอนด์นี้ยังไม่ได้ตั้งค่า บทสนทนาที่เริ่มหลังการเปลี่ยนแปลงนี้จะใช้เครื่องมือเทอร์มินัลและไฟล์ไม่ได้จนกว่าจะตั้งค่าเสร็จ',
        needsSetupConfirmAction: 'เลือกเลย',
        unavailableTitle: 'คำสั่งเทอร์มินัลไม่พร้อมใช้งาน',
        unavailableMessage: backend =>
          `Hermes ไม่สามารถรันคำสั่งเชลล์ได้ในขณะนี้: ${backend} ยังไม่พร้อม เปลี่ยนไปใช้ระบบในเครื่อง หรือตั้งค่า ${backend} ให้เสร็จสิ้นแล้วลองอีกครั้ง`,
        openBackendSettings: 'เปิดการตั้งค่าเทอร์มินัล',
        useLocal: 'ใช้ระบบในเครื่อง',
        switchedToLocal: 'ตั้งให้เรียกคำสั่งเทอร์มินัลในเครื่องแล้ว มีผลกับบทสนทนาใหม่'
      },
      browserRealProfile: {
        label: 'ใช้โปรไฟล์เบราว์เซอร์ของฉัน',
        description:
          'คัดลอกข้อมูลเข้าสู่ระบบและคุกกี้จากเบราว์เซอร์เริ่มต้นมาเป็นสำเนาที่เอเจนต์ใช้เปิดเว็บ โดยไม่เปิดโปรไฟล์จริงที่คุณกำลังใช้งาน มีผลกับบทสนทนาใหม่',
        enabledTitle: 'เปิดการใช้โปรไฟล์เบราว์เซอร์แล้ว',
        enabledMessage: 'บทสนทนาใหม่จะเปิดเว็บด้วยสำเนาโปรไฟล์ของเบราว์เซอร์เริ่มต้นของคุณ',
        disabledTitle: 'ปิดการใช้โปรไฟล์เบราว์เซอร์แล้ว',
        disabledMessage: 'สำเนาโปรไฟล์จะถูกลบ บทสนทนาใหม่จะใช้เบราว์เซอร์ที่ไม่มีข้อมูลเดิม',
        failedSave: 'บันทึกการใช้โปรไฟล์เบราว์เซอร์ไม่ได้',
        prompt: {
          title: 'ใช้เว็บไซต์ที่เข้าสู่ระบบไว้แล้ว',
          body: 'ให้ Hermes เปิดเว็บด้วยสำเนาโปรไฟล์ของเบราว์เซอร์เริ่มต้น เพื่อใช้เว็บไซต์ที่คุณเข้าสู่ระบบไว้แล้ว',
          bulletSnapshot: 'คัดลอกคุกกี้และข้อมูลเข้าสู่ระบบมาเก็บในสำเนาที่แอปจัดการ',
          bulletLiveProfile: 'ไม่เปิดโปรไฟล์เบราว์เซอร์จริงของคุณโดยตรง',
          bulletLocal: 'ข้อมูลเหล่านี้อยู่ในคอมพิวเตอร์เครื่องนี้',
          dontShowAgain: 'ไม่แสดงอีก',
          notNow: 'ยังไม่ใช่ตอนนี้',
          enable: 'ใช้โปรไฟล์ของฉัน'
        }
      }
    }
  }
} satisfies Pick<Translations, 'settings'>
