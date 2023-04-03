import { Foo } from './Footer.styled';
import { About } from './content/About';
import { Logo } from './content/Logo';
import { Navigation } from './content/Navigation';
import { Subscription } from './content/Subscription';
import { SocLink } from './content/SocLink';
import { AllRightReserved } from './content/AllRightReserved';

const Footer = () => {
  return (
    <>
      <Foo>
        <div>
          <div>
            <Logo />
            <About />
          </div>
          <Navigation />
          <Subscription />
        </div>
        <SocLink />
      </Foo>
      <AllRightReserved />
    </>
  );
};
