function skills() {

    const counters = document.querySelectorAll('.skills__line-js'),
        lines = document.querySelectorAll('.skills__ratings-js span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

}

export default skills;