import { Cpu, Film, Layers, Sparkles } from "lucide-react"

type PurposeHighlight = {
  title: string
  description: string
  stat: string
  statLabel: string
  accent: string
}

type CapabilityStream = {
  title: string
  description: string
  icon: typeof Film
  tags: string[]
}

type WorkflowStep = {
  title: string
  description: string
}

type WorkflowTimelineStage = {
  phase: string
  duration: string
  description: string
}

type GalleryItem = {
  src: string
  alt: string
  label: string
}

type PreviewVideo = {
  src: string
  poster: string
}

export const features = [
  {
    title: "Hazir Efekt Kutuphanesi",
    description:
      "1.500'den fazla AI efekt paketi arasindan secim yapin, markaniza uygun preset’leri birkac tikla sahnenize ekleyin.",
    icon: Sparkles,
  },
  {
    title: "Kendi Icerigini Yukle",
    description:
      "Fotograf, video veya 3D sahnelerinizi surukle-birak yukleyin. AuroraFX formatlari otomatik algilayip pipeline’a gore optimize eder.",
    icon: Layers,
  },
  {
    title: "Gercek Zamanli Video Onizleme",
    description:
      "Shader motoru sayesinde efektleri saniyeler icinde canli onizleyin, musterinizle ayni anda duzeltme yapin.",
    icon: Film,
  },
  {
    title: "Takim Hesaplari ve Roller",
    description:
      "Produksiyon ekiplerinizi bir araya getirin, gorev atayin ve yorumlari proje paneli uzerinden takip edin.",
    icon: Cpu,
  },
]

export const workflow: WorkflowStep[] = [
  {
    title: "1. Uye ol & studyonu ac",
    description:
      "Ekip arkadaslarini davet et, ortak calisma alanini olustur ve favori preset’lerini pinle.",
  },
  {
    title: "2. Varliklarini yukle",
    description:
      "Fotograf, video, LUT ya da ses katmanlarini platforma ekle: otomatik etiket sistemi aradigini saniyede bulur.",
  },
  {
    title: "3. Efekti sec & kisisellestir",
    description:
      "Hazir efekt paketlerinden birini sec, isik, renk ve hareket parametrelerini kontrol panelinden ayarla.",
  },
  {
    title: "4. Yayinla veya paylas",
    description:
      "Render’i buluta gonder, sosyal platformlara aktar ya da musteri linkiyle onaya sun.",
  },
]

export const purposeHighlights: PurposeHighlight[] = [
  {
    title: "Hazir efektler",
    description:
      "Fotograf ve video icin profesyoneller tarafindan hazirlanmis yuzlerce koleksiyon, her hafta guncelleniyor.",
    stat: "1.500+",
    statLabel: "preset",
    accent: "from-blue-500/40 via-purple-500/20 to-indigo-500/10",
  },
  {
    title: "Render hiziniz",
    description:
      "GPU destekli bulut sayesinde dakikalar icinde sonuc alin, proje teslim surelerini kisaltin.",
    stat: "90 sn",
    statLabel: "ortalama sonuc",
    accent: "from-cyan-500/40 via-blue-500/20 to-transparent",
  },
  {
    title: "Topluluk",
    description:
      "Dunya capinda ajanslar ve icerik ureticileri ayni preset’ler uzerinde bulusuyor, fikir paylasiyor.",
    stat: "8.000+",
    statLabel: "uye studyo",
    accent: "from-fuchsia-500/40 via-purple-500/20 to-slate-900/0",
  },
]

export const capabilityStreams: CapabilityStream[] = [
  {
    title: "Fotograf efekt kitleri",
    description:
      "Portre duzeltme, moda, urun ve mimari preset setleri tek koleksiyonda bulusuyor.",
    icon: Layers,
    tags: [
      "Cilt tonunu akilli duzelt",
      "Studyo isigi simulasyonu",
      "Urun yansimalarini kontrol et",
    ],
  },
  {
    title: "Video sahne paketleri",
    description:
      "Kamera ici efektleri ve post-produksiyon LUT’larini birlestiren hibrit preset akislari.",
    icon: Film,
    tags: [
      "Sinematik LUT + grain",
      "Hareketli isik cizgileri",
      "Otomatik rota maskesi",
    ],
  },
  {
    title: "Reklam & sosyal setleri",
    description:
      "Kampanya sablonlariyla TikTok, Instagram ve dijital billboard formatlarina hazir export alin.",
    icon: Cpu,
    tags: [
      "Format bazli preset",
      "Otomatik aspect ratio",
      "Musteri paylasim linki",
    ],
  },
]

export const workflowTimeline: WorkflowTimelineStage[] = [
  {
    phase: "On hazirlik",
    duration: "~10 dk",
    description:
      "Brief’i iceri aktar, hedef platformu sec; AuroraFX onerilen preset’leri otomatik listeler.",
  },
  {
    phase: "Preset eslestirme",
    duration: "~20 dk",
    description:
      "Efekti sec, goruntu katmanlarini hizala; akilli maskeleme onerisiyle saniyeler icinde uyarlama yap.",
  },
  {
    phase: "Ince ayar & onay",
    duration: "Anlik",
    description:
      "Canli onizleme linkini ekiple paylas, yorumlari zaman kodu bazli topla, tek panelden duzelt.",
  },
  {
    phase: "Teslim",
    duration: "1 tik",
    description:
      "Render kuyruguna ekle veya API ile CMS’ine gonder; versiyon gecmisi otomatik saklanir.",
  },
]

export const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=80",
    alt: "Isikli portre preset sonucu",
    label: "Neon Portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    alt: "Produksiyon studyosunda video efekti",
    label: "Studio Pipeline",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Sehir manzarasinda isik izi efekti",
    label: "Cinematic Skyline",
  },
]

export const previewVideo: PreviewVideo = {
  src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
}

export const heroActions = [
  {
    label: "Preset kutuphanesini gor",
    href: "/gorsel",
  },
  {
    label: "Video studyosunu dene",
    href: "/video",
  },
  {
    label: "Uyelik planlarini incele",
    href: "/fiyatlar",
  },
]
