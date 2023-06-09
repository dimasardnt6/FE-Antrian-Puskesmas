export let isiTabel = 
`
<tr>
    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <div class="flex px-2 py-1">
        <div>
            <img src="../assets/img/user.png" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
        </div>
            <div class="flex flex-col justify-center">
                <h6 class="mb-0 leading-normal text-sm">#KODEPOLI#</h6>
                <p class="mb-0 leading-tight text-xs text-slate-400">#NAMAPOLI#</p>
            </div>
        </div>
    </td>
    <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-xs">#NAMAPASIEN#</p>
        <p class="mb-0 font-semibold leading-tight text-xs">#NOKTP#</p>
    </td>
    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-xs">#NOANTRIAN#</p>
    </td>
    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-xs">#TANGGALDAFTAR#</p>
    </td>
    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <p class="mb-0 font-semibold leading-tight text-xs">#STATUS#</p>
    </td>
    <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
        <a class="inline-block px-2 py-1 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-slate-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs" href="edit-kemahasiswaan?kemahasiswaanId=#IDEDIT#">Edit</a>
        <button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')" class="inline-block px-2 py-1 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Delete</button>
    </td>
</tr>
`;