import Swal from 'sweetalert2'

type SwalIcons = 'warning' | 'success' | 'error' | 'info'

interface SwalOptions {
	title: string
	text: string
	icon: SwalIcons
}

export const sweetAlert = ({ title, text, icon }: SwalOptions) => {
	Swal.fire({
		title,
		text,
		icon,
		confirmButtonText: 'Ok',
		timer: 4000,
		timerProgressBar: true,
	})
}
