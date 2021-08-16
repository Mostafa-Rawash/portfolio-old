
       console.log("ffssssssssssssssssssssskdmvdlm");
  
     var mixer = mixitup(".my_work_gallery_image", {
      animation: {
          effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
      },
      load: {
          filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
      }
  });

    //  , {
    // selectors: {
    //   target: ".my_work_gallery_image",
    // },
    // animation: {
    //   duration: 300,
    // }})


mixer.show()
    .then(function(state) {
         check = state.totalShow === state.totalTargets
         if(!check)
         console.log("error");
         else
         console.log(" not error");

    });
