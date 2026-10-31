// Thai Desktop workflow copy, manually reviewed against the English messages.
import { thCatalogInstall } from './th_catalog_install'
import { thClarify } from './th_clarify'
import { thErrorCodes } from './th_error_codes'
import { thErrorLayers } from './th_error_layers'
import { thPreviewWeb } from './th_preview_web'
import { thThemePicker } from './th_theme_picker'
import type { Translations } from './types'

export const thPreviewCopy = {
  preview: {
    tab: 'ดูตัวอย่าง',
    pin: 'ปักหมุดในพื้นที่ทำงาน',
    unpin: 'เลิกปักหมุดจากพื้นที่ทำงาน',
    closePane: 'ปิดแผงแสดงตัวอย่าง',
    loading: 'กำลังโหลดตัวอย่าง',
    unavailable: 'การแสดงตัวอย่างไม่พร้อมใช้งาน',
    missingTarget: 'เส้นทางนั้นไม่มีอยู่ในคอมพิวเตอร์เครื่องนี้',
    missingTitle: 'ไฟล์ไม่มีอยู่แล้ว',
    missingBody: label =>
      `${label} ถูกลบ ย้าย หรือล้างตำแหน่งชั่วคราวแล้ว แท็บนี้จะไม่ได้รับการกู้คืนเมื่อเปิดแอปครั้งถัดไป`,
    opening: 'กำลังเปิด...',
    hide: 'ซ่อน',
    openPreview: 'เปิดตัวอย่าง',
    openInBrowser: 'เปิดในเบราว์เซอร์',
    openInExternal: 'เปิดภายนอก',
    popIn: 'รวมกลับในหน้าต่าง',
    popOut: 'แยกเป็นหน้าต่าง',
    linkHint: '\u2318/Ctrl-คลิกเพื่อดูแผงแสดงตัวอย่าง',
    sourceLineTitle: 'คลิกเพื่อเลือก \u00B7 shift-คลิกเพื่อขยาย \u00B7 ลากไปที่ช่องเขียนข้อความ',
    source: 'ต้นฉบับ',
    renderedPreview: 'ตัวอย่าง',
    diff: 'ความต่าง',
    unknownSize: 'ไม่ทราบขนาด',
    binaryTitle: 'ดูเหมือนไฟล์ไบนารี',
    binaryBody: label => `การดูตัวอย่าง ${label} อาจแสดงข้อความที่อ่านไม่ได้`,
    largeTitle: 'ไฟล์นี้มีขนาดใหญ่',
    largeBody: (label, size) => `${label} มีขนาด ${size} Hermes จะแสดงเฉพาะ 512 KB แรกเท่านั้น`,
    previewAnyway: 'ดูตัวอย่างต่อไป',
    truncated: 'แสดงเฉพาะ 512 KB แรก',
    noInlineTitle: 'ไม่มีตัวอย่างในแผงนี้',
    noInlineBody: mimeType => `${mimeType || 'ไฟล์ประเภทนี้'} ยังแนบเป็นบริบทได้`,
    edit: 'แก้ไข',
    editing: 'กำลังแก้ไข',
    unsavedChanges: 'การเปลี่ยนแปลงที่ไม่ได้บันทึก',
    saveFailed: message => `ไม่สามารถบันทึก: ${message}`,
    saveScopeChanged: 'สลับกลับไปยังการเชื่อมต่อและโปรไฟล์เดิมเพื่อบันทึกฉบับร่างนี้',
    diskChangedTitle: 'ไฟล์ถูกเปลี่ยนแปลงบนดิสก์',
    diskChangedBody: 'ไฟล์นี้เปลี่ยนแปลงหลังจากคุณเปิด ต้องการเขียนทับด้วยเวอร์ชันของคุณ หรือทิ้งการแก้ไขแล้วโหลดใหม่?',
    overwrite: 'เขียนทับ',
    discardReload: 'ทิ้งและโหลดใหม่',
    console: {
      deselect: 'ยกเลิกการเลือกรายการ',
      select: 'เลือกรายการ',
      copyFailed: 'ไม่สามารถคัดลอกผลลัพธ์คอนโซลได้',
      copyEntry: 'คัดลอกรายการนี้',
      sendEntry: 'ส่งรายการนี้ไปยังแชต',
      messages: count => `ข้อความคอนโซล ${count} รายการ`,
      resize: 'ปรับขนาดคอนโซลแสดงตัวอย่าง',
      title: 'คอนโซลของหน้าตัวอย่าง',
      selected: count => `เลือกแล้ว ${count} รายการ`,
      sendToChat: 'ส่งไปยังแชต',
      copySelected: 'คัดลอกรายการที่เลือกไปยังคลิปบอร์ด',
      copyAll: 'คัดลอกทั้งหมดไปยังคลิปบอร์ด',
      copy: 'คัดลอก',
      clear: 'ล้าง',
      empty: 'ยังไม่มีข้อความคอนโซล',
      promptHeader: 'คอนโซลแสดงตัวอย่าง:',
      sentTitle: 'ส่งไปยังแชตแล้ว',
      sentMessage: count => `เพิ่มบันทึก ${count} รายการลงในช่องเขียนข้อความแล้ว`
    },
    web: thPreviewWeb
  },
  interfaceMode: {
    title: 'โหมดอินเทอร์เฟซ',
    hint: 'เปลี่ยนสิ่งที่แสดง ไม่ใช่สิ่งที่ Hermes สามารถทำได้',
    sessionNote:
      'โหมดเรียบง่ายเป็นผู้กำหนดค่านี้ การเปลี่ยนแปลงที่นี่มีผลเฉพาะบทสนทนานี้ สลับเป็นโหมดขั้นสูงเพื่อปรับแต่งเอง',
    simple: {
      label: 'เรียบง่าย',
      description: 'สำหรับพูดคุยกับ Hermes แสดงแถบด้านข้างและแชต โดยไม่มีแผงเทอร์มินัล ไฟล์ หรือความต่างของไฟล์'
    },
    advanced: {
      label: 'ขั้นสูง',
      description: 'สำหรับนักพัฒนา แสดงเทอร์มินัล ไฟล์ ความต่างของไฟล์ แถบสถานะ และเค้าโครงตามที่คุณตั้งค่า'
    }
  },
  zones: {
    showTabStrip: 'แสดงแท็บ',
    hideTabStrip: 'ซ่อนแท็บ',
    showStripTab: title => `แสดง ${title}`,
    hideStripTab: title => `ซ่อน ${title}`,
    zoneMenuLabel: title => `ตัวเลือกโซนสำหรับ ${title}`,
    lastTabKeptTitle: 'แท็บสุดท้ายยังคงอยู่',
    lastTabKeptBody: 'โซนนี้ต้องมีแท็บที่มองเห็นได้อย่างน้อยหนึ่งแท็บ แสดงแท็บอื่นก่อน หรือยุบแถบด้านข้างทั้งหมด',
    toggleStripTab: title => `สลับแท็บ ${title}`,
    minimize: 'ย่อเล็กสุด',
    restore: 'คืนค่า',
    closeRunningTitle: 'ปิดแท็บที่ทำงานอยู่ใช่ไหม',
    closeRunningBody:
      'แชตนี้ยังทำงานอยู่หรือรอข้อมูลจากคุณ การปิดแท็บจะซ่อนแชต โดยเก็บความคืบหน้าไว้และเปิดใหม่ได้จากแถบด้านข้าง',
    closeRunningConfirm: 'ปิดแท็บ',
    reload: 'โหลดใหม่',
    closeOthers: 'ปิดแท็บอื่น',
    closeToRight: 'ปิดแท็บด้านขวา',
    closeAll: 'ปิดทั้งหมด',
    newSessionTab: 'แท็บบทสนทนาใหม่',
    newTab: 'แท็บใหม่',
    pluginDisabled: pluginId => `ปิดใช้งานปลั๊กอิน "${pluginId}" อยู่`,
    pluginDisabledBody: 'เปิดใช้งานอีกครั้งในความสามารถ \u2192 ปลั๊กอิน เพื่อนำแผงกลับมา',
    missingPane: paneId => `ไม่พบแผง: ${paneId}`,
    editTitle: 'เค้าโครง',
    editHint: 'เลือกเค้าโครงหรือลากแผงระหว่างโซน',
    reset: 'คืนค่า',
    templates: 'เทมเพลต',
    custom: 'กำหนดเอง',
    newGridLayout: 'เค้าโครงตารางใหม่',
    saveCurrentAs: 'บันทึกการจัดเรียงปัจจุบันเป็นเทมเพลต',
    nameLayoutPlaceholder: 'ตั้งชื่อเค้าโครงนี้...',
    deletePreset: name => `ลบ ${name}`,
    zoneEditorTitle: 'ตัวแก้ไขโซน',
    editorHintPre: 'คลิกเพื่อแยก \u00B7 ',
    editorHintPost: ' เพื่อสลับแนวเส้น \u00B7 ลากข้ามโซนเพื่อรวม \u00B7 ลากขอบที่ใช้ร่วมกันเพื่อปรับขนาด',
    templateColumns: 'คอลัมน์',
    templateRows: 'แถว',
    templateGrid: 'กริด',
    templatePriority: 'ลำดับความสำคัญ',
    zoneTag: index => `โซน ${index}`,
    mergeZones: count => `รวม ${count} โซน`,
    customZoneName: count => `กำหนดเอง ${count} โซน`,
    layoutNamePlaceholder: fallback => `ชื่อเค้าโครง (${fallback})`,
    saveApply: 'บันทึกและนำไปใช้',
    notExpressible: 'เค้าโครงนี้มีโซนเกี่ยวกันแบบกังหัน จึงยังแสดงเป็นการแบ่งพื้นที่ซ้อนกันไม่ได้',
    zoneCount: count => `${count} โซน`,
    tabCount: count => `${count} แท็บ`,
    tabActions: title => `การดำเนินการสำหรับ ${title}`
  },
  contextMenu: {
    link: {
      openInApp: 'เปิดในเบราว์เซอร์ในแอป',
      openExternal: 'เปิดในเบราว์เซอร์ภายนอก',
      copyUrl: 'คัดลอก URL',
      copyResolvedUrl: 'คัดลอก URL ปลายทาง'
    },
    image: {
      copyImage: 'คัดลอกรูปภาพ',
      copyImageAddress: 'คัดลอกที่อยู่รูปภาพ',
      saveImageAs: 'บันทึกภาพเป็น...'
    },
    edit: {
      cut: 'ตัด',
      paste: 'วาง',
      selectAll: 'เลือกทั้งหมด',
      addToDictionary: 'เพิ่มลงในพจนานุกรม'
    },
    page: {
      copyPageUrl: 'คัดลอก URL ของหน้า',
      inspectElement: 'ตรวจสอบองค์ประกอบ'
    }
  },
  assistant: {
    thread: {
      loadingSession: 'กำลังโหลดบทสนทนา',
      showEarlier: 'แสดงข้อความก่อนหน้า',
      loadingResponse: 'Hermes กำลังโหลดการตอบกลับ',
      loadingLocalModel: model => `กำลังโหลด ${model} เข้าหน่วยความจำ`,
      processingPrompt: 'กำลังประมวลผลพรอมป์ต์',
      resumeWhenBackgroundDone: count =>
        count === 1
          ? 'จะกลับมาทำงานต่อเมื่องานเบื้องหลังเสร็จสิ้น'
          : `จะกลับมาทำงานต่อเมื่องานเบื้องหลังทั้ง ${count} งานเสร็จสิ้น`,
      thinking: 'กำลังคิด',
      thought: 'การคิด',
      thoughtBriefly: 'คิดครู่หนึ่ง',
      thoughtFor: duration => `คิดเป็นเวลา ${duration}`,
      turnDuration: duration => `รอบนี้ใช้เวลา ${duration}`,
      today: time => `วันนี้ ${time}`,
      yesterday: time => `เมื่อวาน ${time}`,
      copy: 'คัดลอก',
      refresh: 'รีเฟรช',
      moreActions: 'การดำเนินการเพิ่มเติม',
      branchNewChat: 'แยกเป็นบทสนทนาใหม่',
      react: 'แสดงความรู้สึก',
      dismissError: 'ปิดข้อผิดพลาด',
      responseStopped: 'หยุดการตอบแล้ว',
      ...thErrorLayers,
      errorCodes: thErrorCodes,
      errorAuthKinds: {
        api_key: {
          title: provider => `${provider} ปฏิเสธคีย์ API ของคุณ`,
          body: () => 'คีย์ที่บันทึกไว้ไม่ถูกต้องหรือถูกเพิกถอน อัปเดตแล้วส่งข้อความของคุณอีกครั้ง'
        },
        oauth: {
          title: provider => `เข้าสู่ระบบ ${provider} อีกครั้ง`
        }
      },
      errorDetails: 'ดูรายละเอียดข้อผิดพลาด',
      errorHideDetails: 'ซ่อนรายละเอียดข้อผิดพลาด',
      errorDetailsCopy: 'คัดลอกรายละเอียด',
      errorCopyRaw: 'คัดลอกข้อผิดพลาด',
      errorContinue: 'ดำเนินการต่อ',
      errorOpenProviderSettings: provider => `เปิดการตั้งค่า ${provider}`,
      errorOpenSetupGuide: 'เปิดคู่มือการตั้งค่า',
      errorSetupGuideLink: 'คู่มือการตั้งค่า',
      errorOpenModelSettings: 'เปิดการตั้งค่าโมเดล',
      errorStartNewChatLink: 'เริ่มแชตใหม่',
      errorChooseModelLink: 'เลือกโมเดลอื่น',
      errorRetryAtResetShort: time => `ลองอีกครั้งเวลา ${time}`,
      errorRateLimitResetBody: (provider, time) =>
        `คุณถึงขีดจำกัดอัตราการใช้งานของ ${provider} แล้ว ระบบจะรีเซ็ตเวลา ${time}`,
      errorGenericProvider: 'บริการ AI',
      errorToastTitle: 'Hermes ตอบไม่สำเร็จ',
      errorRetry: 'ลองอีกครั้ง',
      errorRetryScheduled: (time, wait) => `ลองอีกครั้งเวลา ${time} — ใน ${wait}`,
      errorRetryScheduledCancel: 'ยกเลิก',
      errorStartNewSession: 'เริ่มบทสนทนาใหม่',
      errorSwitchProvider: 'เปลี่ยนผู้ให้บริการโมเดล',
      errorChooseModel: 'เลือกโมเดล',
      errorSwitchToModel: (model, note) => (note ? `เปลี่ยนเป็น ${model} (${note})` : `เปลี่ยนเป็น ${model}`),
      errorSwitchModelFailed: 'เปลี่ยนโมเดลไม่สำเร็จ',
      errorUseCredits: 'เปิดใช้เครดิตเพื่อทำงานต่อ',
      errorUseCreditsFailed: 'เปิดใช้เครดิตเพื่อทำงานต่อไม่สำเร็จ',
      errorAddCredits: 'เติมเครดิต',
      errorOpenBillingSettings: 'เปิดการตั้งค่าการเรียกเก็บเงิน',
      errorCompressConversation: 'ย่อบริบทของบทสนทนา',
      errorCompressFailed: 'ย่อบริบทของบทสนทนาไม่สำเร็จ',
      errorOpenHermesFolder: 'เปิดโฟลเดอร์ Hermes',
      errorOpenHermesFolderFailed: 'ไม่สามารถเปิดโฟลเดอร์ Hermes ได้',
      errorUpdateApiKey: 'อัปเดตคีย์ API',
      errorSignInAgain: provider => `เข้าสู่ระบบ ${provider} อีกครั้ง`,
      errorSignInFreeTier: 'เข้าสู่ระบบด้วยบัญชี Nous',
      errorOauthExpired: provider =>
        `การเข้าสู่ระบบ ${provider} ของคุณหมดอายุหรือถูกเพิกถอน เข้าสู่ระบบอีกครั้งเพื่อแชตต่อ`,
      errorOpenLogs: 'เปิดบันทึกการทำงาน',
      errorOpenLogsFailed: 'ไม่สามารถเปิดโฟลเดอร์บันทึกได้',
      errorOpenDesktopLogs: 'เปิดบันทึกเดสก์ท็อป',
      errorSendDiagnostics: 'ส่งข้อมูลวินิจฉัย',
      filesChanged: count => (count === 1 ? 'มีการเปลี่ยนแปลง 1 ไฟล์' : `มีการเปลี่ยนแปลง ${count} ไฟล์`),
      reviewChanges: 'ตรวจทาน',
      readAloudFailed: 'อ่านออกเสียงไม่สำเร็จ',
      preparingAudio: 'กำลังเตรียมเสียง...',
      stopReading: 'หยุดอ่าน',
      readAloud: 'อ่านออกเสียง',
      copyFullResponse: 'คัดลอกคำตอบทั้งหมด',
      readAloudFullResponseHint: 'Shift+คลิก: อ่านคำตอบทั้งหมด',
      editMessage: 'แก้ไขข้อความ',
      expandMessage: 'ขยายข้อความ',
      scrollToBottom: 'เลื่อนไปล่างสุด',
      stop: 'หยุด',
      restorePrevious: 'คืนค่าจากจุดคืนค่าก่อนหน้า',
      restoreCheckpoint: 'คืนค่าจากจุดคืนค่า',
      restoreFromHere: 'คืนค่าจากจุดคืนค่าแล้วรันใหม่จากพรอมป์ต์นี้',
      restoreTitle: 'กลับไปยังจุดคืนค่านี้หรือไม่',
      restoreBody: 'ทุกอย่างหลังพรอมป์ต์นี้จะถูกลบออกจากบทสนทนา แล้วรันพรอมป์ต์ใหม่จากจุดนี้',
      restoreConfirm: 'คืนค่าและรันใหม่',
      restoreNext: 'คืนค่าจากจุดคืนค่าถัดไป',
      goForward: 'ไปข้างหน้า',
      sendEdited: 'ส่งข้อความที่แก้ไข',
      attachingFile: 'กำลังแนบ...'
    },
    approval: {
      gatewayDisconnected:
        'ขณะนี้ Hermes ออฟไลน์ คำสั่งยังรอคำตอบของคุณจนกว่าจะหมดเวลาขออนุญาต เชื่อมต่อใหม่แล้วส่งคำตอบอีกครั้ง',
      sendFailed: 'ส่งคำตอบของคุณไม่สำเร็จ',
      reconnect: 'เชื่อมต่อใหม่',
      timedOutSystemLine:
        'หมดเวลาขออนุญาต จึงไม่ได้รันคำสั่ง ขอให้ Hermes ลองอีกครั้ง หรือเพิ่มเวลาในการตั้งค่า \u2192 ความปลอดภัย \u2192 เวลารอการอนุญาต',
      openSafetySettings: 'เปิดการตั้งค่าความปลอดภัย',
      run: 'เรียกใช้',
      command: 'คำสั่ง',
      commandDetails: 'รายละเอียดคำสั่ง',
      moreOptions: 'ตัวเลือกการอนุญาตเพิ่มเติม',
      allowSession: 'อนุญาตตลอดบทสนทนานี้',
      alwaysAllowMenu: 'อนุญาตเสมอ…',
      jumpToApproval: 'ต้องได้รับอนุญาต',
      reject: 'ไม่อนุญาต',
      alwaysTitle: 'อนุญาตคำสั่งนี้เสมอหรือไม่?',
      alwaysDescription: pattern =>
        `เพิ่มรูปแบบ “${pattern}” ลงในรายการที่อนุญาตแบบถาวรใน config.yaml ของโปรไฟล์ Hermes จะไม่ถามอีกสำหรับคำสั่งที่ตรงกับรูปแบบนี้ ทั้งในบทสนทนานี้และบทสนทนาในอนาคต`,
      alwaysAllow: 'อนุญาตเสมอ'
    },
    clarify: thClarify,
    themePicker: thThemePicker,
    catalogInstall: thCatalogInstall,
    mcpSetup: {
      installTitle: 'เพิ่มเซิร์ฟเวอร์ MCP',
      enableTitle: 'เปิดใช้งานเซิร์ฟเวอร์ MCP',
      authorizeTitle: 'อนุญาตเซิร์ฟเวอร์ MCP',
      installAction: 'ติดตั้ง',
      enableAction: 'เปิดใช้งาน',
      authorizeAction: 'อนุญาต',
      installed: server => `ติดตั้ง ${server} แล้ว`,
      enabled: server => `เปิดใช้งาน ${server} แล้ว`,
      authorized: server => `อนุญาต ${server} แล้ว`,
      failed: server => `การตั้งค่าล้มเหลวสำหรับ ${server}`,
      toolCount: count => (count === 1 ? '1 เครื่องมือ' : `${count} เครื่องมือ`),
      envRequired: 'กรอกข้อมูลยืนยันตัวตนที่จำเป็นก่อน',
      sendFailed: 'ส่งคำตอบสำหรับการตั้งค่า MCP ไม่สำเร็จ',
      reloadFailed: 'บันทึกเซิร์ฟเวอร์แล้ว แต่โหลดเครื่องมือ MCP ใหม่ไม่สำเร็จ เครื่องมือจะโหลดในบทสนทนาถัดไป',
      gatewayDisconnected: 'Hermes ออฟไลน์อยู่ในขณะนี้ เชื่อมต่อใหม่แล้วส่งอีกครั้ง'
    },
    tool: {
      copyCode: 'คัดลอกโค้ด',
      renderingImage: 'กำลังเรนเดอร์รูปภาพ',
      copyOutput: 'คัดลอกผลลัพธ์',
      copyCommand: 'คัดลอกคำสั่ง',
      copyContent: 'คัดลอกเนื้อหา',
      copyUrl: 'คัดลอก URL',
      copyResults: 'คัดลอกผลลัพธ์',
      copyQuery: 'คัดลอกคิวรี',
      copyFile: 'คัดลอกไฟล์',
      copyPath: 'คัดลอกเส้นทาง',
      failedCalls: (count: number) => `การเรียกเครื่องมือล้มเหลว ${count} ครั้ง`,
      skillActivity: {
        loading: 'กำลังโหลดทักษะ',
        loaded: 'โหลดทักษะแล้ว',
        loadFailed: 'โหลดทักษะไม่สำเร็จ',
        readingResource: 'กำลังอ่านทรัพยากรของทักษะ',
        readResource: 'อ่านทรัพยากรของทักษะแล้ว',
        resourceFailed: 'อ่านทรัพยากรของทักษะไม่สำเร็จ',
        listing: 'กำลังแสดงรายการทักษะ',
        listed: 'แสดงรายการทักษะแล้ว',
        listFailed: 'แสดงรายการทักษะไม่สำเร็จ',
        unavailable: 'ผลลัพธ์ของทักษะไม่พร้อมใช้งาน'
      },
      outputAlt: 'ผลลัพธ์เครื่องมือ',
      rawResponse: 'คำตอบดิบ',
      copyActivity: 'คัดลอกกิจกรรม',
      recoveredOne: 'กลับมาทำงานได้หลังล้มเหลว 1 ขั้นตอน',
      recoveredMany: count => `กลับมาทำงานได้หลังล้มเหลว ${count} ขั้นตอน`,
      failedOne: 'ล้มเหลว 1 ขั้นตอน',
      failedMany: count => `ล้มเหลว ${count} ขั้นตอน`,
      statusRunning: 'กำลังทำงาน',
      statusError: 'ข้อผิดพลาด',
      statusRecovered: 'กลับมาทำงานได้แล้ว',
      statusDone: 'เสร็จสิ้น',
      resultUnavailable: 'ผลลัพธ์ไม่พร้อมใช้งาน',
      resultInterrupted: 'ถูกขัดจังหวะ',
      memoryWriteNoted: 'รับทราบการบันทึกความจำ',
      actions: {
        read: 'อ่าน',
        reading: 'กำลังอ่าน',
        opened: 'เปิดแล้ว',
        opening: 'กำลังเปิด',
        failedToOpen: 'ไม่สามารถเปิดได้',
        searched: 'ค้นหาแล้ว',
        searching: 'กำลังค้นหา',
        ran: 'เรียกใช้แล้ว',
        running: 'กำลังทำงาน',
        ranCode: 'เรียกใช้โค้ดแล้ว',
        runningCode: 'กำลังรันสคริปต์'
      },
      prefixes: {
        browser: 'เบราว์เซอร์',
        web: 'เว็บ'
      },
      titleTemplates: {
        actionCommand: (action, command) => `${action} ${command}`,
        actionQuoted: (action, value) => `${action} “${value}”`,
        actionTarget: (action, target) => `${action} ${target}`,
        prefixedDone: (prefix, action) => `${prefix} ${action}`,
        runningPrefixedTool: (prefix, action) => `กำลังรัน ${prefix.toLowerCase()} ${action.toLowerCase()}`,
        runningTool: action => `กำลังรัน ${action.toLowerCase()}`
      },
      titles: {
        browser_click: {
          done: 'คลิกองค์ประกอบในหน้าแล้ว',
          pending: 'กำลังคลิกองค์ประกอบในหน้า',
          pendingAction: 'กำลังคลิก'
        },
        browser_fill: { done: 'กรอกแบบฟอร์มแล้ว', pending: 'กำลังกรอกแบบฟอร์ม', pendingAction: 'กำลังกรอก' },
        browser_navigate: { done: 'เปิดหน้าแล้ว', pending: 'กำลังเปิดหน้า', pendingAction: 'กำลังเปิด' },
        browser_snapshot: {
          done: 'บันทึกสแนปชอตหน้าแล้ว',
          pending: 'กำลังบันทึกสแนปชอตหน้า',
          pendingAction: 'กำลังจับ'
        },
        browser_take_screenshot: {
          done: 'บันทึกภาพหน้าจอแล้ว',
          pending: 'กำลังจับภาพหน้าจอ',
          pendingAction: 'กำลังจับ'
        },
        browser_type: { done: 'พิมพ์ลงในหน้าแล้ว', pending: 'กำลังพิมพ์บนหน้า', pendingAction: 'กำลังพิมพ์' },
        clarify: { done: 'ถามคำถามแล้ว', pending: 'กำลังถามคำถาม', pendingAction: 'กำลังถาม' },
        cronjob: { done: 'งานครอน', pending: 'กำลังตั้งเวลางาน cron', pendingAction: 'กำลังตั้งเวลา' },
        edit_file: { done: 'แก้ไขไฟล์แล้ว', pending: 'กำลังแก้ไขไฟล์', pendingAction: 'กำลังแก้ไข' },
        execute_code: { done: 'เรียกใช้โค้ดแล้ว', pending: 'กำลังเรียกใช้โค้ด', pendingAction: 'กำลังทำงาน' },
        image_generate: { done: 'สร้างภาพแล้ว', pending: 'กำลังสร้างภาพ', pendingAction: 'กำลังสร้าง' },
        list_files: { done: 'แสดงรายการไฟล์แล้ว', pending: 'กำลังแสดงรายการไฟล์', pendingAction: 'กำลังแสดงรายการ' },
        memory: { done: 'บันทึกลงความจำแล้ว', pending: 'กำลังบันทึกลงความจำ', pendingAction: 'กำลังบันทึก' },
        patch: { done: 'แพตช์ไฟล์แล้ว', pending: 'กำลังแพตช์ไฟล์', pendingAction: 'กำลังแพตช์' },
        read_file: { done: 'อ่านไฟล์แล้ว', pending: 'กำลังอ่านไฟล์', pendingAction: 'กำลังอ่าน' },
        search_files: { done: 'ค้นหาไฟล์แล้ว', pending: 'กำลังค้นหาไฟล์', pendingAction: 'กำลังค้นหา' },
        session_search_recall: {
          done: 'ค้นหาประวัติบทสนทนาแล้ว',
          pending: 'กำลังค้นหาประวัติบทสนทนา',
          pendingAction: 'กำลังค้นหา'
        },
        terminal: { done: 'รันคำสั่งแล้ว', pending: 'กำลังรันคำสั่ง', pendingAction: 'กำลังทำงาน' },
        todo: { done: 'อัปเดตสิ่งที่ต้องทำแล้ว', pending: 'กำลังอัปเดตสิ่งที่ต้องทำ', pendingAction: 'กำลังอัปเดต' },
        vision_analyze: { done: 'วิเคราะห์ภาพแล้ว', pending: 'กำลังวิเคราะห์ภาพ', pendingAction: 'กำลังวิเคราะห์' },
        web_extract: { done: 'อ่านหน้าเว็บแล้ว', pending: 'กำลังอ่านหน้าเว็บ', pendingAction: 'กำลังอ่าน' },
        web_search: { done: 'ค้นหาเว็บแล้ว', pending: 'กำลังค้นหาเว็บ', pendingAction: 'กำลังค้นหา' },
        write_file: { done: 'แก้ไขไฟล์แล้ว', pending: 'กำลังแก้ไขไฟล์', pendingAction: 'กำลังแก้ไข' }
      }
    }
  },
  prompts: {
    gatewayDisconnected: 'Hermes ออฟไลน์อยู่ในขณะนี้ เชื่อมต่อใหม่แล้วส่งอีกครั้ง',
    reconnect: 'เชื่อมต่อใหม่',
    sudoSendFailed: 'ส่งรหัสผ่าน sudo ไม่สำเร็จ',
    secretSendFailed: 'ส่งข้อมูลลับไม่สำเร็จ',
    sudoTitle: 'รหัสผ่านผู้ดูแลระบบ',
    sudoDesc: 'ตรวจสอบคำสั่งก่อนกรอกรหัสผ่าน sudo รหัสผ่านจะถูกส่งไปยังเอเจนต์ที่เรียกคำสั่งและเก็บในแคชตลอดบทสนทนานี้',
    sudoCommandUnavailable: 'เอเจนต์ไม่ได้ระบุคำสั่ง หากตรวจสอบคำสั่งจากบทสนทนาไม่ได้ ให้ยกเลิก',
    sudoInstallDesc:
      'Hermes ต้องใช้รหัสผ่าน sudo เพื่อติดตั้งแพ็กเกจ Bot Screen (TigerVNC + Xfce) บนโฮสต์เกตเวย์ รหัสผ่านจะถูกส่งไปยังโฮสต์นั้นเท่านั้น',
    sudoPlaceholder: 'รหัสผ่าน sudo',
    secretTitle: 'ต้องใช้ข้อมูลลับ',
    secretDesc: 'Hermes ต้องใช้ข้อมูลยืนยันตัวตนเพื่อดำเนินการต่อ',
    secretPlaceholder: 'ข้อมูลลับ',
    vaultUnlockSendFailed: 'ไม่สามารถส่งรหัสผ่านหลักได้',
    vaultUnlockTitle: name => `ปลดล็อก ${name}`,
    vaultUnlockDesc: name =>
      `เอเจนต์ต้องการเข้าสู่เว็บไซต์ด้วยข้อมูลเข้าสู่ระบบที่บันทึกใน ${name} กรอกรหัสผ่านหลักเพื่อปลดล็อกตลอดบทสนทนานี้ รหัสผ่านจะส่งตรงไปยัง ${name} บนเครื่องนี้ โดยไม่ถูกบันทึกหรือแสดงให้เอเจนต์เห็น`,
    vaultUnlockPlaceholder: 'รหัสผ่านหลัก',
    vaultUnlockKeepLocked: 'ล็อกไว้ต่อไป',
    vaultUnlockConfirm: 'ปลดล็อก',
    vaultSaveSendFailed: 'บันทึกข้อมูลเข้าสู่ระบบไม่สำเร็จ',
    vaultSaveTitle: site => `บันทึกข้อมูลเข้าสู่ระบบของ ${site} หรือไม่`,
    vaultSaveDesc: origin =>
      `Hermes เปิดหน้าเข้าสู่ระบบที่ ${origin} แต่ยังไม่มีข้อมูลเข้าสู่ระบบ กรอกครั้งเดียวที่นี่ ข้อมูลจะถูกเข้ารหัสบนเครื่องนี้และกรอกลงในหน้าเว็บ โดยโมเดลจะไม่เห็นรหัสผ่าน`,
    vaultSaveIdentifierLabel: 'อีเมลหรือชื่อผู้ใช้',
    vaultSaveIdentifierPlaceholder: 'you@example.com',
    vaultSavePasswordPlaceholder: 'รหัสผ่าน',
    vaultSaveFootnote: 'จัดการข้อมูลเข้าสู่ระบบที่บันทึกไว้ในการตั้งค่า \u2192 รหัสผ่านและการเข้าสู่ระบบ',
    vaultSaveDecline: 'ไม่บันทึก',
    vaultSaveConfirm: 'บันทึกและเข้าสู่ระบบ',
    vaultCodeSendFailed: 'ไม่สามารถส่งรหัสได้',
    vaultCodeTitle: site => `รหัสยืนยันสำหรับ ${site}`,
    vaultCodeDesc: site =>
      `${site} ขอรหัสใช้ครั้งเดียว (จาก SMS อีเมล หรือแอปยืนยันตัวตน) กรอกที่นี่แล้ว Hermes จะพิมพ์ลงในหน้าเว็บ โดยโมเดลจะไม่เห็นรหัส`,
    vaultCodeLabel: 'รหัส',
    vaultCodeFootnote:
      'เคล็ดลับ: บันทึกคีย์ยืนยันตัวตนคู่กับข้อมูลเข้าสู่ระบบนี้ใน การตั้งค่า → รหัสผ่านและการเข้าสู่ระบบ เพื่อให้ Hermes กรอกรหัสให้คุณ',
    vaultCodeSkip: 'ข้าม',
    vaultCodeConfirm: 'ใส่รหัส'
  },
  desktop: {
    audioReadFailed: 'ไม่สามารถอ่านเสียงที่บันทึกไว้',
    sessionUnavailable: 'บทสนทนาไม่พร้อมใช้งาน',
    createSessionFailed: 'สร้างบทสนทนาใหม่ไม่สำเร็จ',
    promptFailed: 'ส่งพรอมป์ต์ไม่สำเร็จ',
    providerCredentialRequired: 'เพิ่มข้อมูลยืนยันตัวตนของผู้ให้บริการโมเดลก่อนส่งข้อความแรก',
    emptySlashCommand: 'คำสั่งสแลชว่าง',
    slashCommandIgnoredTitle: 'ไม่ได้ส่งคำสั่ง',
    slashCommandIgnoredBody: 'ใช้คำสั่งสแลชพร้อมไฟล์แนบไม่ได้ โปรดนำไฟล์แนบออกหรือส่งคำสั่งแยกกัน',
    desktopCommands: 'คำสั่งเดสก์ท็อป',
    skillCommandsAvailable: count => `มีคำสั่งทักษะ ${count} คำสั่ง`,
    warningLine: message => `คำเตือน: ${message}`,
    yoloArmed: 'เปิดใช้ YOLO สำหรับบทสนทนานี้แล้ว',
    yoloOff: 'YOLO ปิดอยู่',
    yoloSystem: active => `YOLO ${active ? 'เปิด' : 'ปิด'} สำหรับบทสนทนานี้`,
    yoloTitle: 'YOLO',
    yoloToggleFailed: 'ไม่สามารถสลับ YOLO ได้',
    profileStatus: current =>
      `โปรไฟล์: ${current} ใช้ /profile <name> หรือตัวเลือก "บทสนทนาใหม่" เพื่อเริ่มแชตในโปรไฟล์อื่น`,
    unknownProfile: 'ไม่รู้จักโปรไฟล์',
    noProfileNamed: (target, available) => `ไม่มีโปรไฟล์ชื่อ "${target}" โปรไฟล์ที่ใช้ได้: ${available}`,
    newChatsProfile: name => `แชตใหม่จะใช้โปรไฟล์ ${name}`,
    setProfileFailed: 'ตั้งค่าโปรไฟล์ไม่สำเร็จ',
    sttDisabled: 'ปิดใช้งานการแปลงเสียงเป็นข้อความอยู่ในการตั้งค่า',
    stopFailed: 'หยุดไม่สำเร็จ',
    regenerateFailed: 'สร้างคำตอบใหม่ไม่สำเร็จ',
    editFailed: 'แก้ไขไม่สำเร็จ',
    editTurnUnavailable: 'รอบนี้ไม่อยู่ในประวัติบนเซิร์ฟเวอร์แล้ว (อาจถูกย่อบริบทออกไป)',
    resumeFailed: 'ดำเนินการต่อไม่สำเร็จ',
    readOnlyTranscriptTitle: 'เปิดแบบอ่านอย่างเดียว',
    readOnlyTranscriptBody:
      'ยังไม่มีแบ็กเอนด์ที่เชื่อมต่อรับแชตเก่านี้ไปดูแล จึงเปิดประวัติแบบอ่านอย่างเดียว โดยประวัติยังอยู่ครบและส่งข้อความไม่ได้จนกว่าแบ็กเอนด์จะรับดูแล',
    readOnlyTranscriptSendBlocked: 'แชตนี้เปิดประวัติแบบอ่านอย่างเดียว จึงส่งข้อความไม่ได้',
    resumeStrandedTitle: 'โหลดบทสนทนานี้ไม่สำเร็จ',
    resumeStrandedBody:
      'เชื่อมต่อกับบทสนทนานี้ไม่สำเร็จและระบบหยุดลองอัตโนมัติแล้ว ตรวจสอบว่าเกตเวย์กำลังทำงาน จากนั้นลองอีกครั้ง',
    poolSlotTimeoutBody:
      'มีบอททำงานพร้อมกันเกินขีดจำกัดของเครื่องนี้ เพิ่มขีดจำกัดในการตั้งค่า \u2192 ขั้นสูง หรือรอให้บอทตัวหนึ่งทำงานเสร็จแล้วลองอีกครั้ง',
    poolSlotTimeoutOpenSettings: 'เปิดการตั้งค่าขั้นสูง',
    resumeRetry: 'ลองอีกครั้ง',
    nothingToBranch: 'ไม่มีข้อความให้แยกเป็นบทสนทนาใหม่',
    branchNeedsChat: 'เริ่มแชตหรือกลับมาแชตต่อก่อนแยกเป็นบทสนทนาใหม่',
    sessionBusy: 'บทสนทนากำลังทำงานอยู่',
    branchStopCurrent: 'หยุดรอบปัจจุบันก่อนแยกแชตนี้',
    branchNoText: 'ข้อความนี้ไม่มีเนื้อหาสำหรับแยกเป็นบทสนทนาใหม่',
    branchTitle: n => `ฉบับร่าง: บทสนทนาที่แยก #${n}`,
    branchFailed: 'แยกบทสนทนาไม่สำเร็จ',
    deleteFailed: 'ลบไม่สำเร็จ',
    archived: 'เก็บถาวรแล้ว',
    archiveFailed: 'การเก็บถาวรล้มเหลว',
    restored: 'คืนค่าแล้ว',
    unarchiveFailed: 'ยกเลิกการเก็บถาวรล้มเหลว',
    cwdChangeFailed: 'การเปลี่ยนแปลงไดเร็กทอรีการทำงานล้มเหลว',
    cwdStagedTitle: 'เตรียมเปลี่ยนไดเร็กทอรีการทำงานแล้ว',
    cwdStagedMessage: 'รีสตาร์ทแบ็กเอนด์ Desktop เพื่อใช้ไดเร็กทอรีการทำงานใหม่กับบทสนทนาที่ใช้งานอยู่นี้',
    modelSwitchConfirmBody: 'ต้องยืนยันก่อนเปลี่ยนโมเดลครั้งนี้',
    modelSwitchConfirmLabel: 'เปลี่ยนต่อไป',
    modelSwitchConfirmTitle: (model: string) => `เปลี่ยนไปใช้ ${model} ไหม?`,
    modelSwitchConfirmTitleFallback: 'เปลี่ยนโมเดลหรือไม่?',
    modelSwitchFailed: 'เปลี่ยนโมเดลไม่สำเร็จ',
    modelSwitchKeepLabel: 'ใช้โมเดลปัจจุบันต่อ',
    modelSwitchStaleNotice: 'การเลือกเปลี่ยนไปแล้ว จึงไม่ได้เปลี่ยนโมเดล',
    hydrationSyncing: (profile: string) => `กำลังซิงค์ ${profile}...`,
    sessionExported: 'ส่งออกบทสนทนาแล้ว',
    sessionExportFailed: 'ส่งออกบทสนทนาไม่สำเร็จ',
    imageSaved: 'บันทึกรูปภาพแล้ว',
    downloadStarted: 'เริ่มดาวน์โหลดแล้ว',
    restartToUseSaveImage: 'รีสตาร์ท Hermes Desktop เพื่อใช้บันทึกภาพ',
    restartToSaveImages: 'รีสตาร์ท Hermes Desktop เพื่อบันทึกภาพ',
    imageDownloadFailed: 'การดาวน์โหลดรูปภาพล้มเหลว',
    openImage: 'เปิดภาพ',
    downloadImage: 'ดาวน์โหลดรูปภาพ',
    savingImage: 'กำลังบันทึกรูปภาพ',
    zoomIn: 'ซูมเข้า',
    zoomOut: 'ซูมออก',
    resetZoom: 'รีเซ็ตการซูม',
    imagePreviewFailed: 'การแสดงตัวอย่างรูปภาพล้มเหลว',
    imageAttach: 'แนบรูปภาพ',
    imageWriteFailed: 'ไม่สามารถเขียนภาพลงดิสก์ได้',
    imageAttachFailed: 'การแนบรูปภาพล้มเหลว',
    attachFailed: 'การแนบล้มเหลว',
    pastedContent: 'วางเนื้อหาแล้ว',
    pasteAttachFailed: 'ไม่สามารถแนบข้อความที่วางได้',
    attachImages: 'แนบรูปภาพ',
    clipboard: 'คลิปบอร์ด',
    noClipboardImage: 'ไม่พบรูปภาพในคลิปบอร์ด',
    clipboardPasteFailed: 'วางข้อมูลจากคลิปบอร์ดไม่สำเร็จ',
    dropFiles: 'วางไฟล์',
    dropFilesMore: (count: number) => `และอีก ${count} รายการ`,
    handoff: {
      pickPlatform: 'เลือกจุดหมายปลายทาง',
      success: platform => `ส่งต่อไปยัง ${platform} แล้ว กลับมาทำต่อที่นี่ได้ทุกเมื่อ`,
      systemNote: platform => `\u21BB ส่งต่อไปยัง ${platform} แล้ว — ดำเนินการต่อที่นี่ได้ตลอดเวลา`,
      failed: error => `ส่งต่อไม่สำเร็จ: ${error}`,
      timedOut:
        'Hermes เข้าถึงการเชื่อมต่อรับส่งข้อความของคุณไม่ได้ เริ่มการเชื่อมต่อจากการตั้งค่า \u2192 การส่งข้อความ แล้วลองส่งต่ออีกครั้ง',
      startMessaging: 'เริ่มส่งข้อความ'
    }
  },
  tips: {
    close: 'อย่าแสดงเคล็ดลับนี้อีก',
    items: {
      'new-session': {
        title: 'เริ่มต้นใหม่',
        text: 'แชตใหม่มีบริบท เทอร์มินัล และไดเร็กทอรีการทำงานแยกเป็นของตัวเอง'
      },
      skills: {
        title: 'สอนเพียงครั้งเดียว',
        text: 'ทักษะคือโฟลเดอร์คำแนะนำที่ Hermes โหลดเมื่องานต้องใช้'
      },
      messaging: {
        title: 'ใช้ Hermes ได้แม้อยู่ห่างจากโต๊ะ',
        text: 'เชื่อมต่อ Telegram, Discord, Slack และอื่นๆ โดยใช้เอเจนต์และความจำเดียวกัน'
      },
      artifacts: {
        title: 'ทุกอย่างที่ Hermes สร้างขึ้น',
        text: 'รวมรูปภาพ ไฟล์ และลิงก์จากทุกบทสนทนาไว้ให้ค้นหาในที่เดียว'
      },
      cron: {
        title: 'งานที่ดำเนินการเอง',
        text: 'ตั้งเวลารันพรอมป์ต์ทุกชั่วโมง ทุกคืน หรือตามนิพจน์ cron'
      },
      'command-palette': {
        title: 'กล่องเดียวได้ทุกอย่าง',
        text: 'ค้นหาบทสนทนา การตั้งค่า ทักษะ และคำสั่งได้จากแผงคำสั่งเดียว'
      },
      profiles: {
        title: 'แต่ละโปรไฟล์แยกจากกัน',
        text: 'แต่ละโปรไฟล์มี Hermes พร้อมคีย์ ความจำ และบทสนทนาแยกเป็นของตัวเอง'
      },
      'composer-mentions': {
        title: 'แนบและสั่งการ',
        text: 'พิมพ์ @ เพื่อนำไฟล์เข้าสู่การสนทนา / เพื่อรันคำสั่ง'
      },
      'local-runtime-update': {
        title: 'มีอัปเดตเอ็นจินโมเดลในเครื่อง',
        text: 'อัปเดตเอ็นจินที่รันโมเดลในเครื่อง คำขอที่กำลังทำงานในเครื่องอาจถูกขัดจังหวะ',
        action: 'อัปเดตตอนนี้'
      },
      'right-pane': {
        title: 'แผงการทำงาน',
        text: 'ไฟล์ เทอร์มินัล การตรวจทาน และเบราว์เซอร์ในแอปอยู่ร่วมกันในแผงด้านขวา'
      }
    }
  },
  errors: {
    genericFailure: 'มีบางอย่างผิดพลาด',
    boundaryTitle: 'มีบางอย่างเสียหายในอินเทอร์เฟซ',
    boundaryDesc: 'เกิดข้อผิดพลาดที่ไม่คาดคิดในมุมมองนี้ แชตและการตั้งค่าของคุณยังปลอดภัย',
    boundaryDetails: 'รายละเอียด',
    sendDiagnostics: 'ส่งข้อมูลวินิจฉัย',
    reloadWindow: 'โหลดหน้าต่างใหม่',
    openLogs: 'เปิดบันทึกการทำงาน'
  },
  ui: {
    search: {
      clear: 'ล้างการค้นหา'
    },
    logs: {
      bottom: 'ด้านล่างของบันทึก',
      search: 'ค้นหาบันทึก...',
      top: 'ด้านบนของบันทึก'
    },
    pagination: {
      label: 'การแบ่งหน้า',
      previous: 'ก่อนหน้า',
      previousAria: 'ไปที่หน้าก่อนหน้า',
      next: 'ถัดไป',
      nextAria: 'ไปที่หน้าถัดไป'
    },
    sidebar: {
      title: 'แถบด้านข้าง',
      description: 'แสดงแถบด้านข้างบนมือถือ',
      toggle: open => `${open ? 'แสดง' : 'ซ่อน'}แถบด้านข้าง`
    }
  }
} satisfies Pick<
  Translations,
  'preview' | 'interfaceMode' | 'zones' | 'contextMenu' | 'assistant' | 'prompts' | 'desktop' | 'tips' | 'errors' | 'ui'
>
