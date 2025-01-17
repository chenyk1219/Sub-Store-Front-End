type SettingsStoreState = SettingsBase & SettingsPostData;

interface SettingsBase {
  syncTime: number;
  avatarUrl: string;
  artifactStore: string;
  artifactStoreStatus?: string;
  // ishostApi: string;
}

interface SettingsPostData {
  gistToken?: string;
  githubUser?: string;
  defaultUserAgent?: string;
  defaultTimeout?: string;
  theme?: {
    auto: boolean;
    name?: CustomTheme;
    dark: CustomTheme;
    light: CustomTheme;
  };
  autoDownloadGistSync?: boolean;
}

interface StoragePostData {
  content: String;
}

type CustomTheme = 'light' | 'dark';
