import { LoadingBox, Wrapper } from "./styles";

export function LoadingItem() {
  return (
    <Wrapper className="loading-item">
      <LoadingBox width={"100%"} height={126} radius={12} />
      <LoadingBox width={"50px"} height={14} margin={8} />
      <LoadingBox width={"100%"} height={14} margin={10} />
      <LoadingBox width={"60px"} height={14} margin={6} />
      <LoadingBox width={"100%"} height={23} margin={10} />
    </Wrapper>
  );
}

export function LoadingFilters() {
  return (
    <Wrapper className="loading-filters">
      <LoadingBox width={"100%"} height={48} radius={2} />
      <LoadingBox width={"100%"} height={24} margin={14} />
      <LoadingBox width={"100%"} height={24} margin={14} />
      <LoadingBox width={"100%"} height={24} margin={14} />
      <LoadingBox width={"100%"} height={24} margin={14} />
    </Wrapper>
  );
}
