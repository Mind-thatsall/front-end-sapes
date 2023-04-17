// (What we call the "scrollbox" is where you can scroll thanks to a overflow auto on the categories and shop page without overlapping the title)
// Used to get the max possible size for the categories and shop.
// It gets the full size of the page and substract the offsetTop of the scroll box from it.
// Thanks to that the scroll box will always take all the available space to be usable and without any bug visually.
export function maxSize(scrollBoxRef) {
  scrollBoxRef.style.height =
    window.innerHeight - scrollBoxRef.offsetTop + "px";
}
