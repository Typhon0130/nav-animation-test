import React, { useState } from "react";
import * as C from "@app/components";
import * as T from "@app/types";
import * as U from "@app/utils";
import * as E from "./elements";
import * as S from "./styles";

export const AppLayout: React.FC<T.AppLayoutProps> = ({ children, name }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const props = U.getSeoList(name);

  return (
    <S.AppLayoutWrapper>
      <C.Seo {...props} />
      <E.Header onToggleSidebar={() => setShowSidebar(true)} />
      <S.AppLayoutContainer>
        <S.AppLayoutContent>{children}</S.AppLayoutContent>
      </S.AppLayoutContainer>
    </S.AppLayoutWrapper>
  );
};
