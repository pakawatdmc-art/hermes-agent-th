import type { Translations } from './types'
// The boot screen's copy (including the update-hold screen), composed by en.ts.
export const thBoot = {
  boot: {
    ready: 'Hermes Desktop พร้อมใช้งานแล้ว',
    desktopBootFailedWithMessage: message => `เริ่ม Desktop ไม่สำเร็จ: ${message}`,
    steps: {
      connectingGateway: 'กำลังเชื่อมต่อเกตเวย์ของ Desktop',
      loadingSettings: 'กำลังโหลดการตั้งค่า Hermes',
      loadingSessions: 'กำลังโหลดบทสนทนาล่าสุด',
      retryingRemoteBackend: 'กำลังเชื่อมต่อกับแบ็กเอนด์ Hermes ระยะไกลอีกครั้ง...',
      startingDesktopConnection: 'กำลังเริ่มการเชื่อมต่อเดสก์ท็อป',
      startingHermesDesktop: 'กำลังเริ่ม Hermes Desktop...'
    },
    errors: {
      backgroundExited: 'บริการที่ดูแลแชตหยุดโดยไม่คาดคิด กรุณารีสตาร์ทเพื่อทำงานต่อ แชตและการตั้งค่าของคุณยังอยู่',
      backgroundExitedDuringStartup: 'Hermes หยุดทำงานทันทีหลังเริ่ม',
      backendStopped: 'Hermes หยุดทำงานในเบื้องหลัง',
      restartHermes: 'รีสตาร์ท Hermes',
      openLogs: 'เปิดบันทึกการทำงาน',
      desktopBootFailed: 'เริ่ม Hermes ไม่ได้',
      gatewayConnectionLost: 'Hermes สูญเสียการเชื่อมต่อ',
      gatewayConnectionLostDetail:
        'กำลังพยายามเชื่อมต่อใหม่ คุณยังอ่านและร่างข้อความได้ หากปัญหายังคงอยู่ ให้เลือกเชื่อมต่อใหม่ทันที หรือตรวจสอบการตั้งค่าการเชื่อมต่อ',
      reconnectNow: 'เชื่อมต่อใหม่ทันที',
      connectionSettings: 'การตั้งค่าการเชื่อมต่อ',
      gatewaySignInRequired: 'การเข้าสู่ระบบ Hermes ระยะไกลหมดอายุแล้ว',
      gatewaySignInRequiredDetail: 'เข้าสู่ระบบอีกครั้งเพื่อเชื่อมต่อใหม่ แชตและการตั้งค่าของคุณยังอยู่',
      signInAgain: 'เข้าสู่ระบบอีกครั้ง',
      ipcBridgeUnavailable: 'Hermes Desktop ติดต่อส่วนทำงานเบื้องหลังของแอปไม่ได้ กรุณารีสตาร์ทแอป'
    },
    // Plain causes for a local backend boot failure (`classifyBootFailure`);
    // the raw output stays behind "Show recent logs".
    causes: {
      exitedEarly: 'บริการพื้นหลังของ Hermes หยุดทันทีหลังจากเริ่มต้น',
      timedOut: 'บริการพื้นหลังของ Hermes ไม่ตอบกลับทันเวลา',
      permission: 'Hermes ไม่มีสิทธิ์เขียนข้อมูลในโฟลเดอร์ที่จัดเก็บ',
      diskFull: 'ดิสก์เต็ม ดังนั้น Hermes จึงไม่สามารถเริ่มทำงานได้',
      portInUse: 'โปรแกรมอื่นกำลังใช้พอร์ตเครือข่ายที่ Hermes ต้องใช้',
      installMissing: 'ไฟล์ติดตั้ง Hermes บางส่วนหายไป เลือกซ่อมแซมการติดตั้งเพื่อกู้คืนไฟล์'
    },
    failure: {
      title: 'เริ่ม Hermes ไม่ได้',
      description:
        'บริการเบื้องหลังของ Hermes เริ่มทำงานไม่ได้ ลองใช้วิธีแก้ไขด้านล่าง วิธีเหล่านี้จะไม่ลบแชตหรือการตั้งค่าของคุณ',
      details: 'รายละเอียด',
      remoteTitle: 'ต้องเข้าสู่ระบบเกตเวย์ระยะไกล',
      remoteDescription:
        'เซสชันการเข้าสู่ระบบเกตเวย์ระยะไกลหมดอายุแล้ว เข้าสู่ระบบอีกครั้งเพื่อเชื่อมต่อใหม่ โดยแชตและการตั้งค่าจะยังอยู่',
      webappTitle: 'เข้าสู่ระบบ Hermes',
      webappDescription: 'เรียกใช้ hermes webapp บนเครื่องนี้เพื่อเข้าสู่ระบบผ่านเบราว์เซอร์นี้',
      retry: 'ลองอีกครั้ง',
      repairInstall: 'ซ่อมแซมการติดตั้ง',
      useLocalGateway: 'ใช้เกตเวย์ในเครื่อง',
      gatewaySettings: 'การตั้งค่าเกตเวย์',
      back: 'ย้อนกลับ',
      openLogs: 'เปิดบันทึกการทำงาน',
      repairHint: 'การซ่อมแซมจะรันโปรแกรมติดตั้งอีกครั้งและอาจใช้เวลาสักครู่กับเครื่องใหม่',
      bundledReinstallHint:
        'รุ่นที่รวมแบ็กเอนด์มากับแอปนี้ซ่อมแซมจากภายในแอปไม่ได้ กรุณาติดตั้งแอปใหม่เพื่อกู้คืนแบ็กเอนด์',
      reinstallApp: 'ติดตั้งแอปอีกครั้ง',
      remoteSignInHint: signInLabel =>
        `ออกจากเซสชันการเข้าสู่ระบบระยะไกลที่บันทึกไว้ในเบราว์เซอร์ แล้วเปิด ${signInLabel} หากต้องการใช้แบ็กเอนด์ที่มากับแอป ให้เลือกใช้เกตเวย์ในเครื่อง`,
      signOutAndSignIn: 'ออกจากระบบและเข้าสู่ระบบ',
      remoteFailureHint: 'ตรวจสอบ URL และการเข้าสู่ระบบในหน้าการตั้งค่าเกตเวย์ หรือสลับไปใช้เกตเวย์ในเครื่อง',
      cloudDownTitle: 'เอเจนต์บน Nous Cloud หยุดทำงาน',
      cloudDownDescription:
        'เอเจนต์บนคลาวด์ที่ Nous ดูแลและเกตเวย์นี้เชื่อมต่ออยู่แจ้งข้อผิดพลาดของเซิร์ฟเวอร์ โดยรีสตาร์ทจากหน้านี้ไม่ได้ กรุณาตรวจสอบสถานะ สลับไปใช้เกตเวย์ในเครื่อง หรือติดต่อฝ่ายสนับสนุน',
      cloudDownHint:
        'ปุ่มด้านล่างจะเปิดพอร์ทัล Nous (สถานะอินสแตนซ์และการควบคุม) และ Discord ของเราเพื่อรับการสนับสนุน',
      cloudDownCheckPortal: 'ตรวจสอบสถานะพอร์ทัล',
      cloudDownDiscord: 'ขอความช่วยเหลือทาง Discord',
      hideRecentLogs: 'ซ่อนบันทึกล่าสุด',
      showRecentLogs: 'แสดงบันทึกล่าสุด',
      signedInTitle: 'เข้าสู่ระบบแล้ว',
      signedInMessage: 'กำลังเชื่อมต่อเกตเวย์ระยะไกลอีกครั้ง...',
      signInIncompleteTitle: 'การเข้าสู่ระบบไม่สมบูรณ์',
      signInIncompleteMessage: 'หน้าต่างเข้าสู่ระบบปิดลงก่อนยืนยันตัวตนเสร็จ',
      signInFailed: 'การเข้าสู่ระบบล้มเหลว',
      signInToRemoteGateway: 'เข้าสู่ระบบเกตเวย์ระยะไกล',
      signInWithProvider: provider => `เข้าสู่ระบบด้วย ${provider}`,
      identityProvider: 'ผู้ให้บริการยืนยันตัวตนของคุณ'
    },
    updateHold: {
      title: 'การอัปเดตก่อนหน้ายังล็อกไฟล์ Hermes ไว้',
      titleUnverified: 'Hermes ไม่สามารถยืนยันได้ว่าการอัปเดตครั้งล่าสุดเสร็จสิ้นแล้ว',
      description: 'Hermes กำลังรอเพื่อไม่ให้โหลดไฟล์ที่การอัปเดตอาจยังแก้ไขอยู่ เมื่อปลดล็อกไฟล์แล้ว แอปจะเริ่มเอง',
      heldByProcess: pid => `โปรเซสอัปเดต (${pid}) จบแล้ว แต่โปรเซสที่มันเรียกขึ้นมายังล็อกไฟล์ติดตั้ง Hermes อยู่`,
      heldUnknown: 'โปรเซสอัปเดตจบแล้ว แต่โปรเซสที่มันเรียกขึ้นมายังล็อกไฟล์ติดตั้ง Hermes อยู่',
      unverified: 'ตัวช่วยอัปเดตยังตรวจไม่ได้ว่าโปรเซสใดล็อกไฟล์ติดตั้ง Hermes อยู่ ระบบจะตรวจสอบต่อไป',
      since: time => `รอตั้งแต่ ${time}`,
      lastChecked: time => `ตรวจสอบล่าสุด ${time}`,
      recoveryHint:
        'ปกติจะปลดล็อกภายในไม่กี่นาที หากยังไม่สำเร็จ ให้ออกจาก Hermes แล้วหยุดโปรเซส git หรือ hermes ที่ค้างอยู่ หรือรีสตาร์ทเครื่อง จากนั้นเปิด Hermes อีกครั้ง',
      checkAgain: 'ตรวจสอบอีกครั้ง',
      quit: 'ออกจาก Hermes',
      openLogs: 'เปิดบันทึกการทำงาน',
      startAnyway: 'เริ่มใช้งานต่อไป…',
      confirmTitle: 'เริ่ม Hermes ขณะที่การอัปเดตยังล็อกไฟล์อยู่หรือไม่',
      confirmBody:
        'โปรเซสอัปเดตที่ค้างอยู่อาจยังแก้ไขไฟล์ของ Hermes การเริ่มตอนนี้อาจโหลดไฟล์ที่อัปเดตไม่ครบ และใช้งานไม่ได้จนกว่าจะอัปเดตอีกครั้ง Hermes จะบันทึกการเลือกนี้ในบันทึกการทำงาน และคงเครื่องหมายสถานะการอัปเดตไว้',
      confirmKeepWaiting: 'รอต่อไป',
      confirmStart: 'เริ่มใช้งานต่อไป',
      startAnywayRefused: 'สถานะการล็อกไฟล์ติดตั้งเปลี่ยนไปก่อน Hermes เริ่มทำงาน กรุณาตรวจสอบแล้วลองอีกครั้ง'
    }
  }
} satisfies Pick<Translations, 'boot'>
