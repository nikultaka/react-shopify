import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
const pop = () => {
    Swal.fire({
        position: 'bottom-start',
        title: 'Free Four Months Supply!',
        html: 'Subscribe to our waste-free, cruelty-free and spam-free list to enter. Winners are selected weekly.',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
}


const PopUpBtn = () => {
    return (
        <>
            <div class="p-fixed z-5 transition-all" style={{ bottom: "15px", left: "15px", position: "fixed", background: "#3eb49c", cursor: "pointer" }} onClick={()=>pop()}>
                <div class="transition-all d-inline-block rounded sectionBg fwb text-mint f-20 shadow p-3 line-height-smaller p-relative animated-pastel-gradient mail-button" style={{ border: "3px solid white", borderRadius: "100px !important" }}>
                    <div class="animated tada d-inline-block infinite " style={{ animationDuration: "2s" }}>👋</div>
                </div>
            </div>


        </>
    )

}
export default PopUpBtn;
