type ValueOf<T> = T[keyof T];

export enum EIcon {
  Alert = "IconAlert",
  BadgeFacebook = "IconBadgeFacebook",
  BadgeInstagram = "IconBadgeInstagram",
  BadgePinterest = "IconBadgePinterest",
  BadgeSnapchat = "IconBadgeSnapchat",
  BadgeTwitter = "IconBadgeTwitter",
  BadgeYoutube = "IconBadgeYoutube",
  Cart = "IconCart",
  Checkmark = "IconCheckmark",
  Chevron = "IconChevron",
  DropdownArrow = "IconDropdownArrow",
  Edit = "IconEdit",
  Envelope = "IconEnvelope",
  FaceCircle = "IconFaceCircle",
  FaceFrown = "IconFaceFrown",
  FaceNeutral = "IconFaceNeutral",
  FaceSmiley = "IconFaceSmiley",
  Facebook = "IconFacebook",
  Hamburger = "IconHamburger",
  Hanger = "IconHanger",
  Heart = "IconHeart",
  HowItWorks = "IconHowItWorks",
  Information = "IconInformation",
  Loader = "IconLoader",
  Minus = "IconMinus",
  NotesPanel = "IconNotesPanel",
  Plans = "IconPlans",
  Plus = "IconPlus",
  Profile = "IconProfile",
  Questionmark = "IconQuestionmark",
  Quiz = "IconQuiz",
  Refresh = "IconRefresh",
  Star = "IconStar",
  Usa = "IconUsa",
  X = "IconX"
};

export type TIconNames = ValueOf<EIcon>;