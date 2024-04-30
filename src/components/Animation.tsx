"use client";

import { ScrollTrigger, gsap } from "@/lib/gsap";
import { animateFrom, hide } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

const Animation = () => {
  /**
   * Accueil page animation animation
   */

  // const [mounted, setMounted] = useStagencyate(false);
  // useEffect(() => {
  //   setMounted(true);
  // });
  // if (mounted) return null;

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.create({
      trigger: ".phone-mockup",
      pin: true,
      start: "100px center",
      end: "+=1900",
    });

    // Height-stacked pinning effect
    let panels = gsap.utils.toArray(".panel");

    panels.forEach((panel: any) => {
      ScrollTrigger.create({
        trigger: panel as HTMLDivElement,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });
  });

  /**
   * end Accueil page animation
   * navbar animation
   */
  useGSAP(() => {
    const showAnim = gsap
      .from(".nav-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  /**
   * end navbar animation
   * valeur section animation
   */

  useGSAP(() => {
    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem as any,
        // markers: true,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  });
  /**
   * end valeur section animation
   * start services animation
   */

  // useGSAP(() => {
  //   gsap.utils.toArray(".preloadSection").forEach((section: any, i) => {
  //     section.image = section.querySelector(".deferredImage");
  //     section.container = section.querySelector(".deferredImageContainer");

  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "-50% bottom",
  //       once: true,
  //       onEnter: () => {
  //         const newSRC = section.image.dataset.src;
  //         const newImage = document.createElement("img");

  //         // No fade
  //         // newImage.onload = () => section.image.src = newImage.src;

  //         // With fade
  //         newImage.onload = () => {
  //           // Layer the low quality version on top
  //           newImage.className = "deferredImage newImage";
  //           section.container.appendChild(newImage);

  //           // Fade in the high quality version and then remove it
  //           gsap.from(newImage, {
  //             autoAlpha: 0,
  //             clearProps: true,
  //             onComplete: () => {
  //               section.container.removeChild(section.image);
  //               newImage.classList.remove("newImage");
  //             },
  //           });
  //         };

  //         newImage.src = newSRC;
  //       },
  //     });
  //   });
  // });

  /**
   * end valeur section animation
   * start services animation
   */

  /**
   * branding parallax effect
   */

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".parallax").forEach((layer: any) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 10);
    });
  });

  /**
   * end branding parallax effect
   */
  return null;
};

export default Animation;
