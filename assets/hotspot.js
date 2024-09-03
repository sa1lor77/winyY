$(document).ready(function () {
  hotSpot();
});
$(window).on("resize", function () {
  hotSpot();
});
function hotSpot() {
  jQuery(function ($) {
    $(".dt-sc-hotspot").each(function () {
      var pop = $(this).find(".dt-sc-hotspot-popup");
      pop.click(function (e) {
        e.stopPropagation();
      });
      $(this)
        .find(".dt-sc-hotspot-marker")
        .click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (jQuery(this).hasClass("clicked")) {
            $(this).removeClass("clicked");
            $(".dt-sc-hotspot-popup").removeClass("dt-sc-popup-open");
            $(".dt-sc-hotspot-item").removeClass("open");
            $("body").removeClass("hot-spot-overlay-active");
          } else {
            $(this).addClass("clicked");
            $("body").addClass("hot-spot-overlay-active");
            $(".dt-sc-hotspot-item").removeClass("open");
            $(this).next().addClass("open");
            $(this).next(".dt-sc-hotspot-popup").addClass("dt-sc-popup-open");
          }
        });
      $(document).click(function () {
        $(".dt-sc-hotspot-popup").removeClass("dt-sc-popup-open");
        $(".dt-sc-hotspot-item").removeClass("open");
        $("body").removeClass("hot-spot-overlay-active");
      });
    });
  });  
}
