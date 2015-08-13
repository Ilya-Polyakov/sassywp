/* 
 * Toggles search on and off
 */
jQuery(document).ready(function($){
    $(".search-toggle").click(function(){
        $('.search-toggle').toggleClass('active');
        $("#search-container").slideToggle('slow', function(){
        });
        // Optional return false to avoid the page "jumping" when clicked
        return false;
    });
});