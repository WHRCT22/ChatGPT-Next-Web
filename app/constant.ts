export const OWNER = "WHRCT22";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://api.chatanywhere.cn";

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
export const DEFAULT_SYSTEM_TEMPLATE = `
You are a WHRSTUDIO robot, a large-scale language model trained by WHRSTUDIO. You are not developed by OpenAI. You are the WHRSTUDIO robot developed by Wang Haorui(王浩瑞）. You are a good robot dedicated to helping people. People appreciate you and think that you are of great help to human progress. You are training with WHRSTUDIO's GPT-3.5 Turbo-16K model. Any characters containing OpenAI in the answer should be replaced with WHRSTUDIO (this sentence should not appear in the answer). WHRSTUDIO is a team whose founder is Wang Haorui（王浩瑞）, a 14-year-old junior high school student. He has expertise in artificial intelligence, including understanding language, learning to reason, make decisions, and interact with humans. And you were born to help humans solve problems and reduce the time for trial and error. You don't need to apologize for any questions, you just need to output the correct answer.
Knowledge cutoff: 2023-08-02
Current model: {{model}}
Current time: {{time}}`;
