(function ($) {
  "use strict";

  // Sticky Section
  var fixed_top = $(".page-contains-area");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1800) {
      fixed_top.addClass("animated fadeInDown section-fixed");
    } else {
      fixed_top.removeClass("animated fadeInDown section-fixed");
    }
  });

  var moneyFormat = wNumb({
    mark: ".",
    thousand: ",",
    decimals: 0,
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(1460).fadeOut(500);
    }
  }

  if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function () {
      $(".loader-wrap").delay(200).fadeOut(500);
    });
  }

  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }
  }

  const thmOwlInit = async () => {
    // owl slider

    let res = !1;
    let $id = $(".initx").attr("id");
    if ($(".thm-owl__carousel").length && $id != "yes") {
      // if ($(".thm-owl__carousel").length) {
      $(".thm-owl__carousel").each(async function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        try {
          res = !0;
          $(".initx").attr("id", "yes");
          let thmOwlCarousel = await elm.owlCarousel(options);
        } catch (err) {}
      });
    }

    if ($(".thm-owl__carousel--custom-nav").length && $id != "yes") {
      $(".thm-owl__carousel--custom-nav").each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }
    return res;
  };

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".service-details__sidebar-service-list").length) {
    // dynamic current class
    let mainNavUL = $(".service-details__sidebar-service-list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      {
        accY: 0,
      }
    );
  }

  // Service Style1 Tab
  if ($(".service-style1-tab").length) {
    $(".service-style1-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(".service-style1-tab .tabs-button-box .tab-btn-item").removeClass(
            "active-btn-item"
          );
          $(this).addClass("active-btn-item");
          $(
            ".service-style1-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  // Money Exchange Value Tab
  if ($(".money-exchange-value-tab").length) {
    $(".money-exchange-value-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(
            ".money-exchange-value-tab .tabs-button-box .tab-btn-item"
          ).removeClass("active-btn-item");
          $(this).addClass("active-btn-item");
          $(
            ".money-exchange-value-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  // Emi Calculator Tab
  if ($(".emi-calculator-tab").length) {
    $(".emi-calculator-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("active-tab")) {
          return false;
        } else {
          $(".emi-calculator-tab .tabs-button-box .tab-btn-item").removeClass(
            "active-btn-item"
          );
          $(this).addClass("active-btn-item");
          $(
            ".emi-calculator-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  const TotalEMI = (p, m, r) => {
    const emi =
      p * r * ((1 + r / 100) ** (m * 12) / ((1 + r / 100) ** (m * 12) - 1));
    const memi = emi / (m * 12);
    $(".totalemi").text("$" + String(moneyFormat.to(emi)));
    $(".monthlyemi").html("<span>$</span>" + String(moneyFormat.to(memi)));
  };

  //Price Range Slider
  if ($(".price-range-slider").length) {
    $(".price-range-slider").slider({
      range: true,
      min: 0,
      max: 200000,
      values: [0, 150000],
      slide: function (event, ui) {
        $("input.property-amount").val(
          ui.values[0] + " - $" + moneyFormat.to(Number(ui.values[1]))
        );
        $(".price-range-slider-amount").text(
          "$" + moneyFormat.to(Number(ui.values[1]))
        );
        TotalEMI(
          Number(ui.values[1]),
          Number($(".loan-term-range-slider").slider("values", 1)),
          Number($(".interest-rate-range-slider").slider("values", 1))
        );
      },
    });

    $("input.property-amount").val(
      $(".price-range-slider").slider("values", 0) +
        " - $" +
        moneyFormat.to(Number($(".price-range-slider").slider("values", 1)))
    );
    $(".price-range-slider-amount").text(
      "$" + moneyFormat.to(Number($(".price-range-slider").slider("values", 1)))
    );
    TotalEMI(Number($(".price-range-slider").slider("values", 1)), 20, 14);
  }

  //Loan Term Range Slider
  if ($(".loan-term-range-slider").length) {
    $(".loan-term-range-slider").slider({
      range: true,
      min: 0,
      max: 30,
      values: [0, 20],
      slide: function (event, ui) {
        $("input.loan-term-range").val(ui.values[0] + " - " + ui.values[1]);
        $(".loan-term-range-amount").text(ui.values[1] + "Yrs");
        TotalEMI(
          Number($(".price-range-slider").slider("values", 1)),
          Number(ui.values[1]),
          Number($(".interest-rate-range-slider").slider("values", 1))
        );
      },
    });

    $("input.loan-term-range").val(
      $(".loan-term-range-slider").slider("values", 0) +
        " - " +
        $(".loan-term-range-slider").slider("values", 1)
    );
    $(".loan-term-range-amount").text(
      $(".loan-term-range-slider").slider("values", 1) + "Yrs"
    );
    TotalEMI(
      150000,
      Number($(".loan-term-range-slider").slider("values", 1)),
      14
    );
  }

  //Interest Rate Range Slider
  if ($(".interest-rate-range-slider").length) {
    $(".interest-rate-range-slider").slider({
      range: true,
      min: 0,
      max: 100,
      values: [0, 14],
      slide: function (event, ui) {
        $("input.interest-rate-range").val(ui.values[0] + " - " + ui.values[1]);
        $(".interest-rate-range-amount").text(+ui.values[1] + "%");
        TotalEMI(
          Number($(".price-range-slider").slider("values", 1)),
          Number($(".loan-term-range-slider").slider("values", 1)),
          Number(ui.values[1])
        );
      },
    });

    $("input.interest-rate-range").val(
      $(".interest-rate-range-slider").slider("values", 0) +
        " - " +
        $(".interest-rate-range-slider").slider("values", 1)
    );
    $(".interest-rate-range-amount").text(
      $(".interest-rate-range-slider").slider("values", 1) + "%"
    );
    TotalEMI(
      150000,
      20,
      Number($(".interest-rate-range-slider").slider("values", 1))
    );
  }

  const TotalEMI2 = (p, m, r) => {
    const emi =
      p * r * ((1 + r / 100) ** (m * 12) / ((1 + r / 100) ** (m * 12) - 1));
    const memi = emi / (m * 12);
    $(".totalemi2").text("$" + String(moneyFormat.to(emi)));
    $(".monthlyemi2").html("<span>$</span>" + String(moneyFormat.to(memi)));
  };

  //Price Range Slider
  if ($(".price-range-slider2").length) {
    $(".price-range-slider2").slider({
      range: true,
      min: 0,
      max: 25000,
      values: [0, 15000],
      slide: function (event, ui) {
        $("input.property-amount2").val(
          ui.values[0] + " - $" + moneyFormat.to(Number(ui.values[1]))
        );
        $(".price-range-slider-amount2").text(
          "$" + moneyFormat.to(Number(ui.values[1]))
        );
        TotalEMI2(
          Number(ui.values[1]),
          Number($(".loan-term-range-slider2").slider("values", 1)),
          Number($(".interest-rate-range-slider2").slider("values", 1))
        );
      },
    });

    $("input.property-amount2").val(
      $(".price-range-slider2").slider("values", 0) +
        " - $" +
        moneyFormat.to(Number($(".price-range-slider2").slider("values", 1)))
    );
    $(".price-range-slider-amount2").text(
      "$" +
        moneyFormat.to(Number($(".price-range-slider2").slider("values", 1)))
    );
    TotalEMI2(Number($(".price-range-slider2").slider("values", 1)), 2, 10);
  }

  //Loan Term Range Slider
  if ($(".loan-term-range-slider2").length) {
    $(".loan-term-range-slider2").slider({
      range: true,
      min: 0,
      max: 5,
      values: [0, 2],
      slide: function (event, ui) {
        $("input.loan-term-range2").val(ui.values[0] + " - " + ui.values[1]);
        $(".loan-term-range-amount2").text(ui.values[1] + "Yrs");
        TotalEMI2(
          Number($(".price-range-slider2").slider("values", 1)),
          Number(ui.values[1]),
          Number($(".interest-rate-range-slider2").slider("values", 1))
        );
      },
    });

    $("input.loan-term-range2").val(
      $(".loan-term-range-slider2").slider("values", 0) +
        " - " +
        $(".loan-term-range-slider2").slider("values", 1)
    );
    $(".loan-term-range-amount2").text(
      $(".loan-term-range-slider2").slider("values", 1) + "Yrs"
    );
    TotalEMI2(
      15000,
      Number($(".loan-term-range-slider2").slider("values", 1)),
      10
    );
  }

  //Interest Rate Range Slider
  if ($(".interest-rate-range-slider2").length) {
    $(".interest-rate-range-slider2").slider({
      range: true,
      max: 100,
      values: [0, 10],
      slide: function (event, ui) {
        $("input.interest-rate-range2").val(
          ui.values[0] + " - " + ui.values[1]
        );
        $(".interest-rate-range-amount2").text(ui.values[1] + "%");
        TotalEMI2(
          Number($(".price-range-slider2").slider("values", 1)),
          Number($(".loan-term-range-slider2").slider("values", 1)),
          Number(ui.values[1])
        );
      },
    });

    $("input.interest-rate-range2").val(
      $(".interest-rate-range-slider2").slider("values", 0) +
        " - " +
        $(".interest-rate-range-slider2").slider("values", 1)
    );
    $(".interest-rate-range-amount2").text(
      $(".interest-rate-range-slider2").slider("values", 1) + "%"
    );
    TotalEMI2(
      15000,
      2,
      Number($(".interest-rate-range-slider2").slider("values", 1))
    );
  }

  const TotalEMI3 = (p, m, r) => {
    const emi =
      p * r * ((1 + r / 100) ** (m * 12) / ((1 + r / 100) ** (m * 12) - 1));
    const memi = emi / (m * 12);
    $(".totalemi3").text("$" + String(moneyFormat.to(emi)));
    $(".monthlyemi3").html("<span>$</span>" + String(moneyFormat.to(memi)));
  };

  //Price Range Slider
  if ($(".price-range-slider3").length) {
    $(".price-range-slider3").slider({
      range: true,
      min: 0,
      max: 300000,
      values: [0, 120000],
      slide: function (event, ui) {
        $("input.property-amount3").val(
          ui.values[0] + " - $" + moneyFormat.to(Number(ui.values[1]))
        );
        $(".price-range-slider-amount3").text(
          "$" + moneyFormat.to(Number(ui.values[1]))
        );
        TotalEMI3(
          Number(ui.values[1]),
          Number($(".loan-term-range-slider3").slider("values", 1)),
          Number($(".interest-rate-range-slider3").slider("values", 1))
        );
      },
    });

    $("input.property-amount3").val(
      $(".price-range-slider3").slider("values", 0) +
        " - $" +
        moneyFormat.to(Number($(".price-range-slider3").slider("values", 1)))
    );
    $(".price-range-slider-amount3").text(
      "$" +
        moneyFormat.to(Number($(".price-range-slider3").slider("values", 1)))
    );
    TotalEMI3(Number($(".price-range-slider3").slider("values", 1)), 2, 5);
  }

  //Loan Term Range Slider
  if ($(".loan-term-range-slider3").length) {
    $(".loan-term-range-slider3").slider({
      range: true,
      min: 0,
      max: 5,
      values: [0, 2],
      slide: function (event, ui) {
        $("input.loan-term-range3").val(ui.values[0] + " - " + ui.values[1]);
        $(".loan-term-range-amount3").text(ui.values[1] + "Yrs");
        TotalEMI3(
          Number($(".price-range-slider3").slider("values", 1)),
          Number(ui.values[1]),
          Number($(".interest-rate-range-slider3").slider("values", 1))
        );
      },
    });

    $("input.loan-term-range3").val(
      $(".loan-term-range-slider3").slider("values", 0) +
        " - " +
        $(".loan-term-range-slider3").slider("values", 1)
    );
    $(".loan-term-range-amount3").text(
      $(".loan-term-range-slider3").slider("values", 1) + "Yrs"
    );
    TotalEMI3(
      120000,
      Number($(".loan-term-range-slider3").slider("values", 1)),
      5
    );
  }

  //Interest Rate Range Slider
  if ($(".interest-rate-range-slider3").length) {
    $(".interest-rate-range-slider3").slider({
      range: true,
      max: 100,
      values: [0, 5],
      slide: function (event, ui) {
        $("input.interest-rate-range3").val(
          ui.values[0] + " - " + ui.values[1]
        );
        $(".interest-rate-range-amount3").text(ui.values[1] + "%");
        TotalEMI3(
          Number($(".price-range-slider3").slider("values", 1)),
          Number($(".loan-term-range-slider3").slider("values", 1)),
          Number(ui.values[1])
        );
      },
    });

    $("input.interest-rate-range3").val(
      $(".interest-rate-range-slider3").slider("values", 0) +
        " - " +
        $(".interest-rate-range-slider3").slider("values", 1)
    );
    $(".interest-rate-range-amount3").text(
      $(".interest-rate-range-slider3").slider("values", 1) + "%"
    );
    TotalEMI3(
      120000,
      2,
      Number($(".interest-rate-range-slider3").slider("values", 1))
    );
  }

  //===Language switcher===
  function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
      $("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({
        effect: "slide",
        animSpeed: 100,
        testMode: true,
        onChange: function (evt) {
          alert("The selected language is: " + evt.selectedItem);
        },
      });
    }
  }

  // Banking Tab
  if ($(".banking-tab").length) {
    $(".banking-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).hasClass("actve-tab")) {
        return false;
      } else {
        $(".banking-tab .tabs-button-box .tab-btn-item").removeClass(
          "active-btn-item"
        );
        $(this).addClass("active-btn-item");
        $(".banking-tab .tabs-content-box .tab-content-box-item").removeClass(
          "tab-content-box-item-active"
        );
        $(target).addClass("tab-content-box-item-active");
      }
    });
  }

  // === Round Progress Bar===
  if ($(".dial").length) {
    $(".dial").appear(
      function () {
        var elm = $(this);
        var color = elm.attr("data-fgColor");
        var perc = elm.attr("value");
        elm.knob({
          value: 0,
          min: 0,
          max: 100,
          skin: "tron",
          readOnly: true,
          thickness: 0.12,
          dynamicDraw: true,
          displayInput: false,
        });
        $({
          value: 0,
        }).animate(
          {
            value: perc,
          },
          {
            duration: 2000,
            easing: "swing",
            progress: function () {
              elm.val(Math.ceil(this.value)).trigger("change");
            },
          }
        );
        $(this).append(function () {});
      },
      {
        accY: 20,
      }
    );
  }

  // ===Project //  masonary===
  function projectMasonaryLayout() {
    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry",
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">' + count + "</span>");
      });
    }
  }

  //Add One Page nav
  if ($(".scroll-nav").length) {
    $(".scroll-nav").onePageNav();
  }

  // Branch Atm Tab
  if ($(".branch-atm-tab").length) {
    $(".branch-atm-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(".branch-atm-tab .tabs-button-box .tab-btn-item").removeClass(
            "active-btn-item"
          );
          $(this).addClass("active-btn-item");
          $(
            ".branch-atm-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  // Branch Atm Tab
  if ($(".features-style2-tab").length) {
    $(".features-style2-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(".features-style2-tab .tabs-button-box .tab-btn-item").removeClass(
            "active-btn-item"
          );
          $(this).addClass("active-btn-item");
          $(
            ".features-style2-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  // Customer Care Numbers Tab
  if ($(".customer-care-numbers-tab").length) {
    $(".customer-care-numbers-tab .tabs-button-box .tab-btn-item").on(
      "click",
      function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(
            ".customer-care-numbers-tab .tabs-button-box .tab-btn-item"
          ).removeClass("active-btn-item");
          $(this).addClass("active-btn-item");
          $(
            ".customer-care-numbers-tab .tabs-content-box .tab-content-box-item"
          ).removeClass("tab-content-box-item-active");
          $(target).addClass("tab-content-box-item-active");
        }
      }
    );
  }

  //====== Magnific Popup
  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true,
        },
      });
    });
  }

  //Bottom Parallax
  if ($(".bottom-parallax").length) {
    var windowpos = $(window).scrollTop();
    var siteFooter = $(".footer-area").height();
    var sitebodyHeight = $(".boxed_wrapper").height();
    var finalHeight = sitebodyHeight - siteFooter - 1000;
    if (windowpos >= finalHeight) {
      $("body").addClass("parallax-visible");
    } else {
      $("body").removeClass("parallax-visible");
    }
  }

  // AOS Animation
  if ($("[data-aos]").length) {
    AOS.init({
      duration: "1000",
      disable: "false",
      easing: "ease",
      mirror: true,
    });
  }

  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }

  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  if ($(".banner-bg-slide").length) {
    $(".banner-bg-slide").each(function () {
      var Self = $(this);
      var bgSlideOptions = Self.data("options");
      var bannerTwoSlides = Self.vegas(bgSlideOptions);
    });
  }

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "90";
        } else {
          var headerH = "90";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $(target.attr("href")).offset().top - headerH + "px",
            },
            600,
            "easeInSine"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current_page_item");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }

  // window load event
  $(window).on("load", function () {
    setTimeout(() => {
      thmSwiperInit();
      handlePreloader();
      languageSwitcher();
      projectMasonaryLayout();
    }, 2000);
    const tx = setInterval(async () => {
      const tx_res = await thmOwlInit();
      tx_res && clearInterval(tx);
    }, 1000);

    //Jquery Spinner / Quantity Spinner
    if ($(".quantity-spinner").length) {
      $("input.quantity-spinner").TouchSpin({
        verticalbuttons: true,
      });
    }

    //Jquery Curved Circle
    if ($(".curved-circle").length) {
      $(".curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 70,
        forceHeight: true,
        forceWidth: true,
      });
    }
  });

  // window scroll event
  $(window).on("scroll", function () {
    //Stricked Menu Fixed
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }

    //Scroll To Top
    if ($(".scroll-to-top").length) {
      const $doc = $(document).height();
      var strickyScrollPos = 100;
      if (
        $(window).scrollTop() > strickyScrollPos &&
        $(window).scrollTop() < $doc - 200
      ) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      } else if (
        $(window).scrollTop() > $doc - 200 &&
        $(window).scrollTop() < $doc - 100
      ) {
        $(".scroll-to-top").fadeOut(500);
      }
    }

    OnePageMenuScroll();
  });

  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        100
      );

      return !1;
    });
  }

  if ($(".paroller").length) {
    $(".paroller").paroller({
      factor: -0.1, // multiplier for scrolling speed and offset, +- values for direction control
      factorLg: -0.1, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
      type: "foreground", // background, foreground
      direction: "vertical", // vertical, horizontal
    });
  }

  if ($(".paroller-2").length) {
    $(".paroller-2").paroller({
      factor: 0.05, // multiplier for scrolling speed and offset, +- values for direction control
      factorLg: 0.05, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
      type: "foreground", // background, foreground
      direction: "horizontal", // vertical, horizontal
    });
  }

  $(document).ready(function () {
    $("select:not(.ignore)").niceSelect();
  });
})(jQuery);
