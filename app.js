const inputs = document.querySelectorAll(".num-input");
const goodCost = document.getElementById("good-cost");
const listPrice = document.getElementById("list-price");
const shippingCost = document.getElementById("shipping-cost");
const categorySelect = document.getElementById("category");
const methodSelect = document.getElementById("method");
const saleCost = document.querySelector(".sale-result");
const goodsCost = document.querySelector(".cost-goods");
const ShippingCost = document.querySelector(".shipping-result");
const totalCost = document.querySelector(".total-result");
const loading = document.getElementById("loading");

inputs.forEach((input) => {
    input.addEventListener("keydown", (evt) => {
        if (evt.which === 38 || evt.which === 40) {
            evt.preventDefault();
        }
    });
});

const selectedCategory = () => {
    const val = categorySelect.options[categorySelect.selectedIndex].text;
    console.log(val);

    const selectedCategoryValue = () => {
        const val = categorySelect.options[categorySelect.selectedIndex].value;
        console.log(val);
    };
    selectedCategoryValue();
};
const selectedMethod = () => {
    const val = methodSelect.options[methodSelect.selectedIndex].text;
    console.log(val);

    const selectedMethodValue = () => {
        const val = methodSelect.options[methodSelect.selectedIndex].value;
        console.log(val);
    };
    selectedMethodValue();
};

const result = () => {
    setTimeout(() => {
        loading.style.display = "block";
    }, 200)
}