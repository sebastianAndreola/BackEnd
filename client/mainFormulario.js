"use strict"

let compra,botonAgregar,cantidad,precio,botonSumarTodo;

 compra = document.getElementById('productos');
 cantidad=document.getElementById('cantidad');
 precio=document.getElementById('precio');
 const compras = document.getElementById('tabla_');

 botonAgregar = document.getElementById('btnAgregar');
 botonSumarTodo = document.getElementById('btnSumarTodo');
 let precioTotal=document.getElementById('precioTotal');

 botonSumarTodo.addEventListener('click', () => {
  let i,elementosTabla;
  let acumulado=0;
  elementosTabla=document.getElementsByTagName("td");
  console.log(elementosTabla);
  for(i=0; i < elementosTabla.length;i++){
    console.log(elementosTabla[i].textContent);
   if(((i+1)%4) == 0)
      acumulado+=new Number(elementosTabla[i].textContent);
  }
  console.log(acumulado);
if (i!=0){
  precioTotal.textContent="Precio total: $" + acumulado;
}  
}
 )


botonAgregar.addEventListener('click', () => {
    let fila, celdaProducto,celdaPrecio,celdaCantidad, celdaPrecioTotalItem;
    event.preventDefault();
    console.log(compra.value);
    if (compra.value != '') {
        fila = document.createElement('tr');
        celdaProducto = document.createElement('td');
        celdaCantidad = document.createElement('td');
        celdaPrecio = document.createElement('td');
        celdaPrecioTotalItem = document.createElement('td');
       

       
        celdaProducto.textContent = compra.value;
        fila.appendChild(celdaProducto);

        celdaCantidad.textContent = cantidad.value;
        fila.appendChild(celdaCantidad);
        
        celdaPrecio.textContent = precio.value;
        fila.appendChild(celdaPrecio);

        celdaPrecioTotalItem.textContent = (precio.value)*(cantidad.value) ;
        fila.appendChild(celdaPrecioTotalItem);
        
       
        //fila.append(celda);
        
      compras.append(fila);
    }
});