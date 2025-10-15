document.addEventListener('DOMContentLoaded', function(){

    const svg = document.querySelector('svg');
    const agregarLibro = document.querySelector('.agregarLibro');
    const mensaje = document.querySelector('.mensaje');
    const confirm = document.getElementById('confirm');

    let miLibreria = [];
    const identif = document.querySelector('.id');
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const pages = document.querySelector('.pages');
    const tabla = document.querySelector('.tabla');
    const form = document.querySelector('form');
    const contenedorLibro = document.querySelector('.contenedorLibros') ;
    
    //Agregar de nuevo libro
    svg.addEventListener('click', function(){
        agregarLibro.showModal();
    });

    
    confirm.addEventListener('click', function(e){
        e.preventDefault();
        
        let id = crypto.randomUUID();        
        let nombreLibro = document.querySelector('input.nombreLibro').value;
        let authorLibro = document.querySelector('input.authorLibro').value;
        let pagesLibro = document.querySelector('input.pagesLibro').value;         
        let isReadyCheckBox = document.querySelector('.checkReady');
        let isReady = isReadyCheckBox ? isReadyCheckBox.checked : false;      
        

        if (!nombreLibro || !authorLibro || !pagesLibro){
            mensaje.textContent = "Please all fields";
            return;
        }
        const nuevoLibro = new Libros(id, nombreLibro, authorLibro, pagesLibro, isReady);        

        const validar = nuevoLibro.Cadalibro();
        if (validar){
            miLibreria.push(nuevoLibro);
            mostrarLibro(miLibreria);
            form.reset();
            mensaje.textContent = "";
        }else{
            mensaje.textContent = "The number pages should be mayor than 0";
            return;
        }
    });

    function Libros(id, nombreLibro, authorLibro, pagesLibro, isReady){
        if (!new.target){
            throw Error('You must be create a constructor before');            
        }
        this.id = id;
        this.name = nombreLibro;
        this.authorLibro = authorLibro;
        this.pagesLibro = pagesLibro;        
        this.isReady = isReady;
    }

    Libros.prototype.Cadalibro = function(){        
        if (parseInt(this.pagesLibro)<=0){            
            return false;
        }
        return true;
    }
    function mostrarLibro(miLibreria){     
        
        
        if (contenedorLibro){
            contenedorLibro.innerHTML = "";
        }
        miLibreria.forEach(unLibro => {
            const fila = document.createElement('div');
            fila.classList.add('filaLibro')

            const lib = document.createElement('div');    
            lib.classList.add('unLibroCard');
            lib.style.color = "white";
            lib.textContent = ` ${unLibro.id.slice(0,8)}`;             
            fila.appendChild(lib);

            const libTitle = document.createElement('div');    
            libTitle.classList.add('unLibroCard');
            libTitle.style.color = "white";
            libTitle.textContent = ` ${unLibro.name}`;             
            fila.appendChild(libTitle);


            const libAuthor = document.createElement('div');    
            libAuthor.classList.add('unLibroCard');
            libAuthor.style.color = "white";
            libAuthor.textContent = ` ${unLibro.authorLibro}`;             
            fila.appendChild(libAuthor);

            const libPages = document.createElement('div');    
            libPages.classList.add('unLibroCard');
            libPages.style.color = "white";
            libPages.textContent = ` ${unLibro.pagesLibro}`;             
            fila.appendChild(libPages);   
            
            const libCheck = document.createElement('div');                       
            libCheck.classList.add('unLibroCard');
            
            if (unLibro.isReady){                
                libCheck.innerHTML = ` <input type = "checkbox" checked>`; 
            }else{
                libCheck.innerHTML = ` <input type = "checkbox">`; 
            }
            fila.appendChild(libCheck);

            const libCheckDel = document.createElement('div');                 
            libCheckDel.classList.add('unLibroCard', 'eliminaFila');            
            libCheckDel.innerHTML = ` <input type = "checkbox" title = "Delete this row">`;            
            fila.appendChild(libCheckDel);  
            
            contenedorLibro.appendChild(fila);
        });
        agregarLibro.close();
    }

    //Borrar una fila
    contenedorLibro.addEventListener('click', function(e){
        const verificar = e.target.closest('.eliminaFila');

        if (!verificar) return;

        const fila = verificar.closest('.filaLibro');        
        const libroId = fila.querySelector('.unLibroCard').textContent.trim();

        miLibreria = miLibreria.filter(libro => !libro.id.startsWith(libroId));        

        mostrarLibro(miLibreria);
    });


});//fin DOMContentLoaded