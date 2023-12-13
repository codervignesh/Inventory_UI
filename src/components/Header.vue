<template>
    <div class="header">
        <div class="header-left">
            <a href="">
                <img class="logo" :src="logo" alt="logo"/>
            </a>
            <input type="text" placeholder="Search" @keyup.enter="handleSearch"/>
            <h3>{{ title }}</h3>
        </div>
        <div class="header-nav">
            <nav>
                <a href=""  style="padding: 0px 50px;" @click="$emit('alert-search', title)">Product List</a>
                <a href=""  style="padding: 0px 50px;" @click="$emit(title)">Add Product</a>
                <a href=""  style="padding: 0px 50px;">Cart</a>
            </nav>
        </div>
    </div>
</template>

<script src="./js/header.js">
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.header-left {
    display: flex;
    width: 50%;
}

input[type="text"] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 60%;
}

.logo {
    height: 40px;
    padding: 0px 50px;
}

a {
    text-decoration: none;
    font-size: 16px;
    transition: font-size 1s;
}
 
a:hover {
    color: red;
    font-size: 18px;
}

</style>