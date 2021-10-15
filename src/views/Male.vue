<template>
    <div class="Main">
        <div>
            <img src="../assets/images/banner.png" style=" width: 100%" />
        </div>
        <b-nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Enlaces</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Comprar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vender</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ayuda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contactenos</a>
                        </li>
                    </ul>
                </div>
                <form class="d-inline-flex my-2 my-lg-0">
                    <label class="nav-link">Pais</label>
                    <select
                        class="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>Seleccionar</option>
                        <option value="1">Colombia</option>
                        <option value="2">Corea</option>
                        <option value="3">Brasil</option>
                    </select>
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Buscar
                    </button>
                </form>
            </div>
        </b-nav>
        <section style="display:inline-flex">
            <b-navbar-nav class="d-lg-inline-flex">
                <div class="Categories">
                    <h3>Categorias</h3>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <router-link to="/female">Mujer</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/male">Hombre</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/main">Unisex</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/main">Casual</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/main">Botas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/main">Elegantes</router-link>
                        </li>
                    </ul>
                </div>
            </b-navbar-nav>
            <table>
                <tr>
                    <td>
                        <form class="d-inline-flex my-2 my-lg-0">
                            <h3>Filtros</h3>
                            <br />
                            <input
                                class="form-control mr-sm-4"
                                type="search"
                                placeholder="Talla"
                                aria-label="Talla"
                            />
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Precio"
                                aria-label="Precio"
                            />
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Estado"
                                aria-label="Estado"
                            />
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Marca"
                                aria-label="Marca"
                            />
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Color"
                                aria-label="Color"
                            />
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Ciudad"
                                aria-label="Ciudad"
                            />
                        </form>

                        <h3>Ofertas</h3>
                        <table>
                            <tr>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z1.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z2.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z3.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z4.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z5.jpg"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z6.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z7.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z8.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z9.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z10.jpg"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z11.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z12.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z13.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z14.jpg"
                                    />
                                </td>
                                <td>
                                    <img
                                        class="imgMostrar"
                                        src="../assets/images/zapatosHombres/z15.jpg"
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </section>
    </div>
</template>
<style>
.imgMostrar {
    width: 300px;
    height: 300px;
    padding: 10px;
}
.Categories {
    background-color: rgb(238, 236, 236);
    margin: 2px;
    padding: 2px;
}
</style>
