/**
 * Custom smooth scroll with easing — accounts for the fixed navbar height.
 * Produces a more controlled, premium animation than native scrollIntoView.
 */
export function smoothScrollTo(target) {
  const element =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!element) return;

  const navbarHeight = 72;
  const start = window.scrollY;
  const end = element.offsetTop - navbarHeight;
  const distance = end - start;
  const duration = 800;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}