import styled from "@emotion/styled";
import { ProductListContainer } from "../components/ProductList/ProductListContainer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export function MainPage() {
  return (
    <PageContainer>
      <ProductListContainer />
    </PageContainer>
  );
}
