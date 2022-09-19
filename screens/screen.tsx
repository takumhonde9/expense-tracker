import BgContainer from "../components/containers/bg.container";

type ScreenProps = {
  children?: any;
};

function Screen({ children }: ScreenProps) {
  return <BgContainer>{children}</BgContainer>;
}

export default Screen;
