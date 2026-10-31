import { defineFieldCopy } from '@/app/settings/field-copy'

export const TH_FIELD_LABELS: Record<string, string> = defineFieldCopy({
  model: 'โมเดลเริ่มต้น',
  modelContextLength: 'ขนาดบริบทของโมเดลหลัก (กำหนดแทนค่าที่ตรวจพบ)',
  fallbackProviders: 'โมเดลสำรอง',
  toolsets: 'ชุดเครื่องมือที่เปิดใช้งาน',
  timezone: 'เขตเวลา',
  display: {
    personality: 'บุคลิก',
    showReasoning: 'ส่วนแสดงกระบวนการคิด'
  },
  desktop: {
    repoScanEnabled: 'ค้นหาคลังโค้ดอัตโนมัติ',
    repoScanRoots: 'โฟลเดอร์เริ่มต้นสำหรับค้นหาคลังโค้ด',
    repoScanExcludePaths: 'เส้นทางคลังโค้ดที่ไม่ต้องค้นหา'
  },
  agent: {
    maxTurns: 'จำนวนขั้นตอนสูงสุดของเอเจนต์',
    imageInputMode: 'รูปภาพแนบ',
    apiMaxRetries: 'จำนวนครั้งที่ลองเรียก API ใหม่',
    serviceTier: 'ระดับบริการ',
    toolUseEnforcement: 'การบังคับใช้เครื่องมือ'
  },
  terminal: {
    cwd: 'โฟลเดอร์ทำงาน',
    backend: 'ระบบที่ใช้เรียกคำสั่ง',
    timeout: 'เวลารอคำสั่งสูงสุด',
    persistentShell: 'เชลล์ที่คงสถานะไว้',
    envPassthrough: 'ตัวแปรสภาพแวดล้อมที่ส่งต่อ',
    dockerImage: 'อิมเมจ Docker',
    singularityImage: 'อิมเมจ Singularity',
    modalImage: 'อิมเมจ Modal',
    daytonaImage: 'อิมเมจ Daytona'
  },
  fileReadMaxChars: 'ขีดจำกัดการอ่านไฟล์',
  toolOutput: {
    maxBytes: 'ขีดจำกัดผลลัพธ์จากเทอร์มินัล',
    maxLines: 'ขีดจำกัดจำนวนบรรทัดต่อหน้าไฟล์',
    maxLineLength: 'ขีดจำกัดความยาวบรรทัด'
  },
  codeExecution: {
    mode: 'โหมดเรียกใช้โค้ด'
  },
  approvals: {
    mode: 'โหมดการอนุญาต',
    timeout: 'เวลารอการอนุญาตสูงสุด',
    mcpReloadConfirm: 'ยืนยันก่อนโหลด MCP ใหม่'
  },
  commandAllowlist: 'รายการคำสั่งที่อนุญาต',
  security: {
    redactSecrets: 'ปิดบังข้อมูลลับ',
    allowPrivateUrls: 'อนุญาต URL ภายในเครือข่าย'
  },
  browser: {
    allowPrivateUrls: 'URL ภายในเครือข่ายสำหรับเบราว์เซอร์',
    autoLocalForPrivateUrls: 'ใช้เบราว์เซอร์ในเครื่องสำหรับ URL ภายในเครือข่าย',
    useRealProfile: 'ใช้โปรไฟล์เบราว์เซอร์จริงของฉัน'
  },
  checkpoints: {
    enabled: 'จุดคืนค่าไฟล์',
    maxSnapshots: 'จำนวนจุดคืนค่าสูงสุด'
  },
  voice: {
    maxRecordingSeconds: 'ความยาวการบันทึกเสียงสูงสุด',
    autoTts: 'อ่านคำตอบออกเสียง',
    voiceChatMode: 'โหมดสนทนาด้วยเสียง',
    gptLive: {
      voice: 'เสียง GPT-Live',
      instructions: 'บุคลิก GPT-Live'
    }
  },
  stt: {
    enabled: 'ถอดเสียงเป็นข้อความ',
    echoTranscripts: 'แสดงข้อความที่ถอดเสียง',
    provider: 'ผู้ให้บริการถอดเสียงเป็นข้อความ',
    streaming: 'ถอดเสียงแบบสด',
    local: {
      model: 'โมเดลถอดเสียงภายในเครื่อง',
      language: 'ภาษาที่ใช้ถอดเสียง'
    },
    openai: {
      model: 'โมเดล STT ของ OpenAI',
      streamingModel: 'โมเดลถอดเสียงสดของ OpenAI'
    },
    groq: {
      model: 'โมเดล STT ของ Groq'
    },
    mistral: {
      model: 'โมเดล STT ของ Mistral'
    },
    xai: {
      model: 'โมเดล STT ของ xAI'
    },
    deepinfra: {
      model: 'โมเดล STT ของ DeepInfra'
    },
    elevenlabs: {
      modelId: 'โมเดล STT ของ ElevenLabs',
      languageCode: 'ภาษาของ ElevenLabs',
      tagAudioEvents: 'ติดป้ายกำกับเหตุการณ์เสียง',
      diarize: 'แยกผู้พูดในเสียง'
    }
  },
  tts: {
    provider: 'ผู้ให้บริการแปลงข้อความเป็นเสียง',
    edge: {
      voice: 'เสียง Edge'
    },
    openai: {
      model: 'โมเดล TTS ของ OpenAI',
      voice: 'เสียง OpenAI'
    },
    elevenlabs: {
      voiceId: 'เสียง ElevenLabs',
      modelId: 'โมเดล ElevenLabs'
    },
    xai: {
      voiceId: 'เสียง xAI (Grok)',
      language: 'ภาษาของ xAI',
      speed: 'ความเร็วการเล่นเสียง xAI',
      autoSpeechTags: 'ป้ายกำกับเสียงอัตโนมัติของ xAI',
      optimizeStreamingLatency: 'การลดความหน่วงของสตรีมเสียง xAI',
      sampleRate: 'อัตราสุ่มตัวอย่างเสียง xAI',
      bitRate: 'อัตราบิตเสียง xAI'
    },
    minimax: {
      model: 'โมเดล TTS ของ MiniMax',
      voiceId: 'เสียง MiniMax'
    },
    mistral: {
      model: 'โมเดล TTS ของ Mistral',
      voiceId: 'เสียง Mistral'
    },
    gemini: {
      model: 'โมเดล TTS ของ Gemini',
      voice: 'เสียง Gemini'
    },
    neutts: {
      model: 'โมเดล NeuTTS',
      device: 'อุปกรณ์สำหรับ NeuTTS'
    },
    kittentts: {
      model: 'โมเดล KittenTTS',
      voice: 'เสียง KittenTTS'
    },
    piper: {
      voice: 'เสียง Piper'
    },
    deepinfra: {
      model: 'โมเดล TTS ของ DeepInfra',
      voice: 'เสียง DeepInfra'
    }
  },
  memory: {
    memoryEnabled: 'ความจำระยะยาว',
    userProfileEnabled: 'โปรไฟล์ผู้ใช้',
    memoryCharLimit: 'ขนาดพื้นที่ความจำ',
    userCharLimit: 'ขนาดพื้นที่โปรไฟล์',
    provider: 'ผู้ให้บริการความจำ'
  },
  context: {
    engine: 'ระบบจัดการบริบท'
  },
  compression: {
    enabled: 'ย่อบริบทอัตโนมัติ',
    threshold: 'เกณฑ์เริ่มย่อบริบท',
    codexGpt55Autoraise: 'เพิ่มเกณฑ์ย่อบริบทของ Codex อัตโนมัติ',
    targetRatio: 'ขนาดบริบทเป้าหมายหลังย่อ',
    protectLastN: 'ข้อความล่าสุดที่คงไว้'
  },
  auxiliary: {
    compression: {
      timeout: 'เวลารอโมเดลย่อบริบท (วินาที)'
    }
  },
  delegation: {
    model: 'โมเดลของเอเจนต์ย่อย',
    provider: 'ผู้ให้บริการโมเดลของเอเจนต์ย่อย',
    maxIterations: 'จำนวนรอบสูงสุดของเอเจนต์ย่อย',
    maxConcurrentChildren: 'จำนวนเอเจนต์ย่อยที่ทำงานพร้อมกัน',
    childTimeoutSeconds: 'เวลารอเอเจนต์ย่อยสูงสุด',
    reasoningEffort: 'ระดับการคิดของเอเจนต์ย่อย'
  },
  updates: {
    nonInteractiveLocalChanges: 'การจัดการไฟล์ที่แก้ไขเมื่ออัปเดตจากแอป'
  }
})
export const TH_FIELD_DESCRIPTIONS: Record<string, string> = defineFieldCopy({
  model: 'ใช้กับแชตใหม่ เว้นแต่คุณเลือกโมเดลอื่นในช่องเขียนข้อความ',
  modelContextLength:
    'กำหนดขนาดบริบทแทนค่าที่ตรวจพบของโมเดลแชตหลักเท่านั้น (หน่วยโทเคน) ใช้ 0 เพื่อใช้ค่าที่ตรวจพบของโมเดลที่เลือก การตั้งค่านี้ไม่กระทบโมเดลเสริมหรือ MoA',
  fallbackProviders: 'รายการ provider:model สำรองที่จะลองใช้เมื่อโมเดลเริ่มต้นทำงานไม่สำเร็จ',
  display: {
    personality: 'รูปแบบผู้ช่วยเริ่มต้นสำหรับบทสนทนาใหม่',
    showReasoning: 'แสดงกระบวนการคิดเมื่อแบ็กเอนด์ส่งข้อมูลนี้มา'
  },
  desktop: {
    repoScanEnabled: 'ค้นหาคลัง Git ในโฟลเดอร์ภายในเครื่องเพื่อแสดงในโปรเจกต์',
    repoScanRoots: 'โฟลเดอร์ที่จะค้นหา เว้นว่างเพื่อค้นหาในโฟลเดอร์หลักของผู้ใช้',
    repoScanExcludePaths: 'โฟลเดอร์รวมถึงโฟลเดอร์ย่อยที่จะข้ามขณะค้นหาคลังโค้ด'
  },
  timezone: 'รหัสเขตเวลาตามมาตรฐาน IANA เว้นว่างเพื่อใช้เขตเวลาของระบบ',
  browser: {
    useRealProfile:
      'การท่องเว็บภายในเครื่องใช้บัญชีที่คุณเข้าสู่ระบบจริง Hermes คัดลอกโปรไฟล์ของเบราว์เซอร์เริ่มต้น (คุกกี้ ข้อมูลเข้าสู่ระบบ และการตั้งค่า) ไปยังสำเนาที่ระบบจัดการ แล้วใช้งานผ่าน Chromium ที่มาพร้อมแอป โดยไม่เปิดโปรไฟล์ที่คุณใช้อยู่โดยตรง และอัปเดตสำเนาจากโปรไฟล์จริงทุกครั้ง นอกจากนี้เอเจนต์ยังเปิดการท่องเว็บด้วยโปรไฟล์จริงในเครื่องได้เมื่อมีคำขอ แม้จะตั้งค่าเบราว์เซอร์บนคลาวด์ไว้ รองรับเฉพาะเบราว์เซอร์ที่ใช้ Chromium (Chrome, Edge, Brave, Brave Origin, Chromium) หากเบราว์เซอร์เริ่มต้นไม่ใช่ Chromium ระบบจะแจ้งข้อผิดพลาดอย่างชัดเจน ค่าเริ่มต้นคือปิด'
  },
  agent: {
    imageInputMode: 'กำหนดวิธีส่งรูปภาพแนบไปยังโมเดล',
    maxTurns: 'จำนวนรอบเรียกเครื่องมือสูงสุดก่อนที่ Hermes จะหยุดงาน'
  },
  terminal: {
    cwd: 'โฟลเดอร์โปรเจกต์เริ่มต้นสำหรับการใช้เครื่องมือและเทอร์มินัล',
    persistentShell:
      'ระบบ SSH: คงตัวแปรที่ export ไว้ระหว่างคำสั่ง เมื่อปิด แต่ละคำสั่งจะเริ่มด้วยสภาพแวดล้อมตอนเข้าสู่ระบบ โดยโฟลเดอร์ทำงานยังคงต่อเนื่องเสมอ',
    envPassthrough: 'ตัวแปรสภาพแวดล้อมที่จะส่งต่อให้เครื่องมือที่เรียกใช้',
    dockerImage: 'อิมเมจคอนเทนเนอร์ที่ใช้เมื่อเรียกคำสั่งผ่าน Docker',
    singularityImage: 'อิมเมจที่ใช้เมื่อเรียกคำสั่งผ่าน Singularity',
    modalImage: 'อิมเมจที่ใช้เมื่อเรียกคำสั่งผ่าน Modal',
    daytonaImage: 'อิมเมจที่ใช้เมื่อเรียกคำสั่งผ่าน Daytona'
  },
  codeExecution: {
    mode: 'ระดับความเข้มงวดในการจำกัดการเรียกใช้โค้ดให้อยู่ในโปรเจกต์ปัจจุบัน'
  },
  fileReadMaxChars: 'จำนวนอักขระสูงสุดที่ Hermes อ่านได้ต่อคำขออ่านไฟล์หนึ่งครั้ง',
  approvals: {
    mode: 'วิธีที่ Hermes จัดการคำสั่งที่ต้องได้รับอนุญาตอย่างชัดเจน',
    timeout: 'ระยะเวลาที่คำขออนุญาตรอคำตอบก่อนหมดเวลา'
  },
  security: {
    redactSecrets: 'ปิดบังข้อมูลลับที่ตรวจพบจากเนื้อหาที่โมเดลเห็นเมื่อทำได้'
  },
  checkpoints: {
    enabled: 'สร้างสำเนาสำหรับย้อนคืนก่อนแก้ไขไฟล์'
  },
  memory: {
    memoryEnabled: 'บันทึกความจำระยะยาวที่เป็นประโยชน์ต่อบทสนทนาครั้งต่อไป',
    userProfileEnabled: 'เก็บโปรไฟล์ความชอบของผู้ใช้แบบกระชับ'
  },
  context: {
    engine: 'วิธีจัดการบทสนทนายาวเมื่อใกล้ถึงขีดจำกัดบริบท'
  },
  compression: {
    enabled: 'สรุปบริบทเก่าเมื่อบทสนทนามีขนาดใหญ่',
    codexGpt55Autoraise: 'เพิ่มเกณฑ์ย่อบริบทเป็น 85% สำหรับโมเดล ChatGPT Codex OAuth ที่รองรับ'
  },
  auxiliary: {
    compression: {
      timeout:
        'จำนวนวินาทีที่รอโมเดลเสริมสำหรับย่อบริบทต่อการเรียกหนึ่งครั้ง (ค่าเริ่มต้น 120) เพิ่มค่าได้สำหรับโมเดลภายในเครื่องที่ทำงานช้า'
    }
  },
  voice: {
    autoTts: 'อ่านคำตอบของผู้ช่วยออกเสียงโดยอัตโนมัติ',
    voiceChatMode:
      'chained: ถอดเสียง \u2192 Hermes \u2192 แปลงข้อความเป็นเสียง โดยใช้ผู้ให้บริการด้านล่าง ส่วน gpt-live ใช้โมเดลเสียง OpenAI แบบรับและส่งเสียงพร้อมกัน (gpt-live-1) เพื่อฟังและพูด และส่งทุกคำขอทำงานจริงให้ Hermes โมเดลที่คุณเลือกจะตอบโดยใช้ชุดเครื่องมือทั้งหมด ต้องมี OpenAI API key โดยส่วนเสียงมีค่าบริการ $0.05 ต่อนาที',
    gptLive: {
      voice: 'เสียงสำหรับโหมด GPT-Live รองรับรหัสเสียงที่กำหนดเอง',
      instructions:
        'คำแนะนำเพิ่มเติมสำหรับบุคลิกเสียงสด (น้ำเสียง จังหวะ และภาษา) Hermes ยังคงใช้ พรอมป์ต์ระบบของตัวเอง'
    }
  },
  tts: {
    xai: {
      voiceId: 'รหัสเสียง xAI (เช่น eve) หรือรหัสเสียงที่กำหนดเอง',
      language: 'รหัสภาษาพูด (เช่น en, pt-BR) หรือ "auto" เพื่อให้ตรวจจับอัตโนมัติ',
      speed: 'ความเร็วการเล่นเสียง 0.7 = ช้าลง, 1.0 = ปกติ, 1.5 = เร็วขึ้น',
      autoSpeechTags: 'ให้ LLM เพิ่มป้ายกำกับอารมณ์เสียง ([laughing], [sighs]) ในบทพูดก่อนสังเคราะห์เสียง',
      optimizeStreamingLatency: 'เลือกระหว่างความหน่วงกับคุณภาพ 0 = คุณภาพดีที่สุด, 2 = ความหน่วงต่ำที่สุด',
      sampleRate: 'อัตราสุ่มตัวอย่างเสียง หน่วย Hz ค่าสูงให้คุณภาพดีขึ้นและไฟล์ใหญ่ขึ้น',
      bitRate: 'อัตราบิต MP3 หน่วย bps ใช้เฉพาะเมื่อ codec เป็น mp3'
    },
    neutts: {
      device: 'อุปกรณ์ประมวลผลภายในเครื่องสำหรับ NeuTTS'
    }
  },
  stt: {
    enabled: 'เปิดการถอดเสียงด้วยระบบภายในเครื่องหรือผู้ให้บริการ',
    echoTranscripts: 'ส่งข้อความดิบที่ถอดจากเสียง \uD83C\uDF99\uFE0F กลับไปในแชต',
    streaming: 'แสดงข้อความขณะคุณพูด (OpenAI, xAI, ElevenLabs) หากเกิดข้อผิดพลาดจะกลับไปใช้เสียงที่บันทึกไว้',
    elevenlabs: {
      languageCode: 'รหัสภาษา ISO-639-3 (ไม่บังคับ) เว้นว่างเพื่อให้ ElevenLabs ตรวจจับอัตโนมัติ'
    }
  },
  updates: {
    nonInteractiveLocalChanges:
      'เมื่อ Hermes อัปเดตตัวเองจากแอปโดยไม่มีคำถามในเทอร์มินัล ให้เก็บไฟล์ซอร์สที่แก้ไขไว้ (stash) หรือทิ้งการเปลี่ยนแปลง (discard) การอัปเดตจากเทอร์มินัลจะถามก่อนเสมอ'
  }
})
