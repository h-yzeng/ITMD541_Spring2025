// H Zeng
// ITMD 541-02 Graduate Student

//1. In the hero section change the main headline
(function () {
    document.querySelector('#hero h1').textContent = 'Uplift Your Brand with Stellar Marketing';
})();

//2. Change the line of text below the hero headline 
(function () {
    document.querySelector('#hero p').innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.';
})();

//3. Change the image in the background of the hero
(function () {
    document.getElementById('hero').style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
})();

//4. Change the background color of the nav bar to the same color that is used in the footer
(function () {
    document.querySelector('header').style.backgroundColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
})();

//5. Remove the “Get Started” CTA from the hero.
(function () {
    document.querySelector('#hero a').remove();
})();

//6. Center Align the heading for sections – a. Services, b. Solutions, and c. Contact
(function () {
    ['services', 'solutions', 'contact'].forEach(id => document.querySelector(`#${id} h2`).classList.add('text-center'));
})();

//7. In the services section change the icons color to (#47C714)
(function () {
    document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => icon.style.color = '#47C714');
})();

//8. Change the digital marketing icon to use ‘Ads Click’ instead of the current icon.
(function () {
    document.querySelector('[data-icon="digital"]').textContent = 'ads_click';
})();


//9. In the specialized marketing solutions section make a change to the layout of the tiles


//10. In the same section change the Musicians image 


// Graduate Additional Requirements

