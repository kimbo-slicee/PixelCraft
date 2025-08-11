const select=document.querySelector('select');
function upDateTheme(e) {
    document.documentElement.style.setProperty('--theme', e.target.value);
    if(e.target.value === 'system') document.documentElement.style.removeProperty("--theme");

}

select.addEventListener("change", function (e){
        if(!document.startViewTransition){
            upDateTheme(e);
            return;
        }
        document.startViewTransition(() => {
            upDateTheme(e);
        })
        // localStorage.setItem('theme', e.target.value);
});