import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 95%;
  max-width: 100%;
  padding: 15px 20px;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  transition: background-color 0.45s cubic-bezier(0.6, 0.6, 0, 1),
    box-shadow 0.45s cubic-bezier(0.6, 0.6, 0, 1),
    max-width 1s cubic-bezier(0.6, 0.6, 0, 1),
    padding 0.45s cubic-bezier(0.6, 0.6, 0, 1);
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  .logo-img {
    transition: all 0.5s;
    width: 162px;
    overflow: hidden;
    img {
      max-width: none;
    }
  }
  &.scrolled {
    max-width: 1280px;
    box-shadow: 0 0 2px #5f4a2e14, 0 2px 3px #5f4a2e0a, 0 4px 6px #5f4a2e0a,
      0 20px 32px -12px #5f4a2e1f;
    border-radius: 10px;
    padding: 15px 24px;
    .logo-img {
      position: relative;
      width: 42px;
    }
  }
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 1100px) {
    padding: 8px 20px;
    &.scrolled {
      padding: 8px 24px;
    }
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    transition: all 0.3s;
    margin-right: 64px;
  }
  @media screen and (max-width: 1280px) {
    & > :not(:last-child) {
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const AuthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
  }
  .signup {
    margin-left: 24px;
    padding: 8px 22px;
    border-radius: 999px;
    background: #388aeb;
    color: #fff;
  }
  @media screen and (max-width: 1100px) {
    font-size: 14px;
    .signup {
      display: none;
    }
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
  }
`;

export const HeaderMobileMenuWrapper = styled.div`
  display: none;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 1100px) {
    display: block;
    margin-left: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 375px;
  width: 100%;
  z-index: 30;
  opacity: 0;
  transition: all 0.7s;
  visibility: hidden;
  background: #fff;
  left: -375px;
  & .nav-wrapper {
    & > div {
      transform: translate(-30px);
      opacity: 0;
      filter: blur(2px);
    }
  }
  & .footer {
    & > span {
      transform: translateY(20px);
      opacity: 0;
      filter: blur(2px);
    }
  }
  &.open {
    left: 0;
    opacity: 1;
    visibility: visible;
    & .nav-wrapper {
      & > div {
        transform: translate(0);
        opacity: 1;
        filter: blur(0px);
      }
      & > div:nth-child(1) {
        transition-delay: 0.55s;
      }

      & > div:nth-child(2) {
        transition-delay: 0.6s;
      }

      & > div:nth-child(3) {
        transition-delay: 0.65s;
      }

      & > div:nth-child(4) {
        transition-delay: 0.7s;
      }

      & > div:nth-child(5) {
        transition-delay: 0.75s;
      }
    }
    & .footer {
      & > span {
        transform: translate(0);
        opacity: 1;
        filter: blur(0px);
      }
      & > span:nth-child(1) {
        transition-delay: 0.5s;
      }

      & > span:nth-child(2) {
        transition-delay: 0.6s;
      }
    }
  }
`;

export const SidebarHeader = styled.div`
  border-bottom: 1px solid #00000010;
  padding: 18px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const SidebarNavWrapper = styled.div`
  padding: 20px 10px;
  & > div {
    transition: background-color 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      transform 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      opacity 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      filter 0.45s cubic-bezier(0.6, 0.6, 0, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 8px;

    &:hover {
      background-color: #70451a12;
    }
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 26px;

  span {
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px #d1cdc780, 0 3px 3px #d1cdc74d, 0 -2px #f0f0ef inset,
      0 0 0 1px #f0f0ef;
    margin-top: 16px;
    padding: 10px;
    justify-content: center;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      box-shadow 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      transform 0.45s cubic-bezier(0.6, 0.6, 0, 1),
      opacity 0.45s cubic-bezier(0.6, 0.6, 0, 1);
    &.signup {
      background-color: #388aeb;
      box-shadow: 0 1px 1px #388aeb1f, 0 1.50259px 3px #388aeb3d,
        0 4px 8px #388aeb52, 0 12px 24px -6px #388aeb66, 0 -2px #388aeb inset;
      color: #fff;
    }
  }
`;

export const SidebarOverLay = styled.div`
  transition: all 0.3s;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background: #00000010;
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;
