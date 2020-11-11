var val = true;
function changeSidNavSize() 
{
    if (val) {
        if (!document.getElementById('id2')) 
        {
            var link = document.createElement('link');
            link.id = 'id2';
            link.rel = 'stylesheet';
            link.href = '../.css/sideNavStyle.css';
            document.head.appendChild(link);
        }
        document.getElementById("id2").href = '../.css/sideNavStyle.css';
        this.val = false;
    }
    else 
    {
        document.getElementById("id2").href = '../.css/sideNav.css';
        this.val = true;
    }
}