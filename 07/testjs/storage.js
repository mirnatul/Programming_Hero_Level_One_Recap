const handleAddToStorage = () => {
    const name = document.getElementById("name").value;

    localStorage.setItem("name", name)

    console.log(name);
}