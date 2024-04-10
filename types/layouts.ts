export type AuthFormContainerProps = {
  size?: number;
  name: string;
} & React.HTMLAttributes<HTMLElement>;

export type AppHeaderProps = {
  onToggleSidebar: () => void;
};

export type AppSidebarProps = {
  show: boolean;
  onClose: () => void;
};

export type AppLayoutProps = {
  name: string;
} & React.HTMLAttributes<HTMLElement>;
