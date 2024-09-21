document.addEventListener("DOMContentLoaded", function() 
{
    const submit = document.getElementById("get-started");

    submit.addEventListener('click', () => 
    {
        window.location.href = "signup.html";
    })
})