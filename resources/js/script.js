    $('.portfolio-container-nav').click(() =>  {
        $('html, body').animate({scrollTop: $('.portfolio-section').offset().top}, 1000); 
    });
    
    $('.contact-container-nav').click(() =>  {
       $('html, body').animate({scrollTop: $('.contact-section').offset().top}, 1000); 
    }); 
    $('.about').click(() =>  {
       $('html, body').animate({scrollTop: $('.about-me-section').offset().top}, 1000); 
    });     


    

/*
    $('.project-grid img').hover( function() {
        
       
         $('.info').css('display','block');
        
        
    });
*/
 /* 
var JSController = (function(){
    
  
    class Proyecto{
        constructor(name,projectimg,usedTech){
        this.name = name;
        this.projectimg = projectimg;
        this.usedTech = usedTech;
        }
    }
    var data = {
        
        project:[]
        
    }
    let Panaderia = new Proyecto('Panaderia Principal de las 50','resources/img/panaderia.png',['HTML5','CSS3','AJAX']);
    let Dulces =  new Proyecto('Dulces Tentaciones','resources/img/dulces.PNG',['HTML5','CSS3']);
    data.project.push(Panaderia);
    data.project.push(Dulces);


    
    return{
        
        
        getData: ()=>{
            return data.project;
        }
        
    };
    
    
})();



const UIController = (function(){
    
    
    
    
    
})();
const Controller = (function(){
    
    var currentIndex = 0;
    
    
    document.querySelector('.forward-image').addEventListener('click',()=>{
       
        if(document.getElementById('used').hasChildNodes()){
            let childs =document.getElementById('used').childNodes;
            childs.forEach(cur =>{
                document.getElementById('used').removeChild(cur);
            })
        }
        let data = JSController.getData();
         if(currentIndex+1 < data.length){
        
            
        currentIndex++;
        var listChild;
        var nodeList;
        console.log(data);
        console.log(document.getElementById('gallery'));
        document.getElementById('name').textContent=data[currentIndex].name;
        document.getElementById('gallery').src = data[currentIndex].projectimg;
        
        data[currentIndex].usedTech.forEach(cur =>{
            
            listChild=document.createElement('li');
            console.log(cur);
            nodeList =document.createTextNode(cur);
            console.log(nodeList);
            listChild.appendChild(nodeList);
            console.log(listChild);
            document.getElementById('used').appendChild(listChild)
            
        })
    }
});
        
     function GalleryButtons (type, selector){
     document.querySelector('.backward-image').addEventListener('click',()=>{
        if(document.getElementById('used').hasChildNodes()){
            let childs =document.getElementById('used').childNodes;
            childs.forEach(cur =>{
                document.getElementById('used').removeChild(cur);
            })
            
        }
        if(type==='minus'){
            if(currentIndex != 0){
                currentIndex--;
        }
            
    }});
    
    function changeHtml(currentIndex){
        let data = JSController.getData();
        var listChild;
        var nodeList;
        console.log(data);
        console.log(document.getElementById('gallery'));
        document.getElementById('name').textContent=data[currentIndex].name;
        document.getElementById('gallery').src = data[currentIndex].projectimg;

        data[currentIndex].usedTech.forEach(cur =>{
            
            listChild=document.createElement('li');
            console.log(cur);
            nodeList =document.createTextNode(cur);
            console.log(nodeList);
            listChild.appendChild(nodeList);
            console.log(listChild);
            document.getElementById('used').appendChild(listChild)
            
            })
        }
    }
    
    GalleryButtons('minus','.backward-image');
    GalleryButtons('plus','.forward-image')

    
})(JSController,UIController);
    */
    