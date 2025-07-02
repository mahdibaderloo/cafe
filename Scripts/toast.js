export function toast(title, icon) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    color: "#351f08",
    background: "#fff",
    width: "80%",
    fontSize: 16,
  });
  Toast.fire({
    icon: icon,
    title: title,
    iconColor: "#351f08",
  });
}
