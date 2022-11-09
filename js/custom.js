$('#vs-mo-menu-icon').click(function() {
    $(this).toggleClass('open');
    $(".falcon").toggleClass('open');
});

const domes = document.getElementById('dome');
domes.addEventListener("click", function() {
    dome.style.color = '#ff1a1a';
})