
document.addEventListener('DOMContentLoaded',function(){
  const current=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(link=>{
    if(link.getAttribute('href')===current) link.classList.add('active');
  });
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll('.needs-demo').forEach(form=>{
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!form.checkValidity()){form.classList.add('was-validated');return;}
      const btn=form.querySelector('button[type="submit"]'); if(!btn)return;
      const old=btn.innerHTML;
      btn.innerHTML='<i class="bi bi-check-circle-fill me-2"></i>Submitted Successfully';
      btn.disabled=true;
      setTimeout(()=>{btn.innerHTML=old;btn.disabled=false;form.reset();},2600);
    });
  });
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}});
    },{threshold:.08});
    document.querySelectorAll('.card-soft,.stat,.hero-img').forEach(el=>observer.observe(el));
  }
});
