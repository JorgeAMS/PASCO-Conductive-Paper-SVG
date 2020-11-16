function set_pos(id){
    try {
        document.getElementsByClassName("esf_click")[0].classList.remove('esf_click');
        document.getElementsByClassName("ln_click")[0].classList.remove('ln_click');
        document.getElementsByClassName("ln_click")[0].classList.remove('ln_click');
    } catch (error) {
        
    }

    let esf = document.getElementById(id).children[0];
    let ln1 = document.getElementById(id).children[1].children[0];
    let ln2 = document.getElementById(id).children[1].children[1];

    if(ln1.classList.contains("str3") && ln2.classList.contains("str3") && esf.classList.contains("fil0")){
        esf.classList.add("esf_click");
        ln1.classList.add("ln_click");
        ln2.classList.add("ln_click");
    }
}
function set_color(id){
    let esf = document.getElementById(id).children[0];
    let ln1 = document.getElementById(id).children[1].children[0];
    let ln2 = document.getElementById(id).children[1].children[1];
    if(ln1.classList.contains("str3") && ln2.classList.contains("str3") && esf.classList.contains("fil0")){
        esf.classList.add("esf_hover");
        ln1.classList.add("ln_hover");
        ln2.classList.add("ln_hover");
    }
}
function remove_color(id){
    let esf = document.getElementById(id).children[0];
    let ln1 = document.getElementById(id).children[1].children[0];
    let ln2 = document.getElementById(id).children[1].children[1];
    esf.classList.remove('esf_hover');
    ln1.classList.remove('ln_hover');
    ln2.classList.remove('ln_hover');
}
