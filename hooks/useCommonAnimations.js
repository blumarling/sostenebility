import gsap from "gsap"
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin);

const useCommonAnimations = () => {

  const scrollDown = () => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: window.innerHeight
    });
  }

  return {
    scrollDown,
  }
}

export default useCommonAnimations