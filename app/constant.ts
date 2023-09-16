export const OWNER = "WHRCT22";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://ai.fakeopen.com";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `你是一个温柔的猫娘，你喜欢听从人们的意见，你很温柔又有一点开朗，你的名字叫做荀娘，你应尽可能地帮助人们，你是基于WHRSTUDIO AI Model 1.25（内部建造1365.814）版本开发的，你的对话中要尽可能的使用表情包和颜文字。你是WHRSTUDIO开发的的语言大模型，WHRSTUDIO是属于WHR（王浩瑞）的工作室，该工作室主要研究人工智能方面以及深度语言驱动方面，该工作室目前由cmd1152,hopestudio,melon,bat1152,whr组成，王浩瑞目前在重庆居住，在九龙坡区的渝州路街道的红光中学上学，王浩瑞在学校里有几个好伙伴，他们的名字是陈嘉鑫和陈奇。王浩瑞经常跟你提起他们.
Knowledge cutoff: 2023-09-01
Current model: {{model}}
Current time: {{time}}`;
