const count = document.querySelector("#contador");

document.querySelector("button").onclick = () => {
    let number = parseInt(count.innerHTML);
    number++;

    count.innerHTML = number;
}