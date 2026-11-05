+++
title = "Configure neovim from Scratch"
date = 2025-09-18
description = "An explanation of how i configure my neovim setup. "
[taxonomies]
tags = ["editor", "Open Source", "nvim"]
categories = ["Software"]
[extra]
image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOsNuiNiR_5Veu1EeTXOMG7VpQyxUUZS2QHeTzo24faCL6KEfAyjYuKglYez31zHjxtAh_n13I9cKNDOnFJQLGK5bmQVe_VAa6vYorLG4eCpRhxYmUIy7CEWH54yZLw9RzQG2ceSDzFnHS1WnaqMkeJTrGUEpqFDuTYPyL4LNC97rM-WlDsM47w8wD5yyF/s1365/pic-selected-240914-1406-41.png"
  toc = true
in_search_index = true
+++

#### How to install

To install simply just type
```bash
sudo pacman -S neovim
```

Now make a directory in .config
```bash
mkdir ~/.config/nvim
```
then go to that directory and open nvim 
```bash
cd ~/.config/nvim
nvim .
```
here this type of interface popup

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlEccoDEj5CZgXVd6CiweqhVczEQRHgki0We_MffmX2BqDx3B5HnaY0dc6Sjgg8UhUmgDqDSGvXY-2BFVDqHv_qf5ZoDLFaICZGwVfN4EMGUiRIQGon5F2VIoo2DNEs2RfyTKr14gLWaSYFUSR7RdvoLBhoJZ-GHK56EEyCqxkPzU1iuIBjqQNU-MZMfqj/s1364/pic-window-240913-1743-56.png", alt="Screenshot")}}

#### How to configure

Now press `:` and type 
```
:h rtp
```

here you can see `default $XDG_CONFIG_HOME/nvim` is our main directory where we put all our config files. 
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxIXHocnkLhtvxZN4rIk7xEVAH1fjw809GNTUtNZZ3TzGUT0f1M3OXuUCDi2658gGYym7XHirlKi2ZCjdO4AIN80Fl7Mp985hdHtjlLXtw0qKMSzVNngVe2gs2iQY_Ln3JQWQzRwL05Ja_Se7L-J4mwMx4eh32LBsVaBlfvyw0Pvva25TNJQdWshF0Ym55/s1364/pic-window-240913-1748-25.png", alt="Screenshot")}}

Now exit from that your interface should look like this

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSAZcEnzH-SOXjVUgO_v2YnV2Dyw85kIKMAJp6iVlgJHk1rkfqtybFvjD2MgTh9o0HiQLGgiJ_ycv7MRV2G9i4ChN2ksg-_qEfdTyMk-xsWboqPaPLLyc-gtedBURYFw7S9jpZtfknIPT1J0k5TEQs3EvW666VX34ERuegZp1kKMZ-XXbyIpxV41HabjNZ/s1364/pic-window-240913-1743-56.png", alt="Screenshot")}}


Now press % and give file name `init.lua`

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBh7cr8aFVY-ds0dN_xYKfcNph1WL-UM5aY7ESQaqsCbUQ_ZDiH5-djUKqEt_izHkHnmjnPOdw1k2xvR1PhiWhwFkzvwxw3sinknaf5z3XYqCmFskUD-IdLh_F9ltbk7j8c_DQyi08Y822w-FPwpQ_mb_fluP4t9RW8Bmk2Qgx7bTW8bTm-plN11bdqlCb/s501/pic-selected-240913-1812-12.png", alt="Screenshot")}}

To type something press `i` (insert) or `a`(append)
type this
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaQ98ctWxLs-7I6zb9ZJge3X8_qn9f4rlyiQ-7KlwDW8u7DruJ5YtXDisDVBWh_nkzteZQpmrARbSlqwFEFop5SBlB4mewx1U03kNvEFyn9I2TnpT6ams3qdqSJKw923wByoOCPxWJ6qW_oqzKTn30LErGIaXfzSgpXF9bSAkPN-RuOXa8e1YXUFOmSbgT/s368/pic-selected-240913-1815-40.png", alt="Screenshot")}}

now exit from insert mode by pressing `Esc` or `ctrl + c`

After to save this file press `:` and type `w`(write) or `wq`(write and quiet)

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpdOezSW67-NQy0aDlGu0Kwjbd8syUv59SArftXhIdej2_8t9F6j_ZAcQYZSV1jmwDHaHvz4j_oNmsFtSrwQgr5rbUQJZtGVkQKuWcoDw4YQkwBF0A2WMaLRD4gN7ELO0eyX8qB6UqcF4iXwebBCuw8dmGTx7BTj2vWki6rsZOjnp3W_GzpYHOnsYh4yP4/s421/pic-selected-240913-1823-04.png", alt="Screenshot")}}

Again go to nvim 
```
nvim .
```

here you can notice that our file is created and bottom left you can see hello.

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMB3Opt0bRBdhmPvygfl9gno_5qNKMYS0L9e2L1xZ7bypb06yaCcNM7jYwnrRCL5R-XhnV9nCMRXtgjuSSLQAZGAwjc342wyQKptP02zPURy90YhXAFDL8Kt5YPhWuS1wTQ_LPNrruEtf50tki2t0fUde7R4YXn2Suf_UzA-4m-4F76od5_Ms9qWu2TpLM/s1364/pic-window-240913-1833-48.png", alt="Screenshot")}}

Now press `d` to create directory and give name `lua`
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8NXHzCnitR7Xo4yNijWhiskByVxuySeYQefEIMfgtcAE_Xw9RrsUW4fXPHYWo8kyDoAv6EO2_skts5Tp8ZW-SuyfynQr-mqYU1-Ptk-X6CSoSHJNl2I5i5FNoxPKYQ9rrRhWAyQ-uA5exKwZiJvl0rs5w3YhoE-I1VKG6ECR2EhzYX80D39zVEIwbIzT6/s1364/pic-window-240913-1844-33.png", alt="Screenshot")}}

Go to lua directory and create a whatever named directory
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ7bK9EGUlpO1Dco4fQgqA4Xdt-6v_hGy1GAlPHNGz66hSlsVycc-TSvM7FLa4pGIktsm3_-af8u6HnrR5YrH84_MPZvp7Y7NFKfgzfqEMZBg6HtBlnH2MPejwMn79jdBoP-OFTOFn-t806JABVJYnDjFTLbd2oXIw1kVgKeKKnQfrDtCsz4PbVtqyZeXt/s1364/pic-window-240913-1911-55.png", alt="Screenshot")}}

And go to that directory and create file `init.lua`

for testing type this in your file:

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyM5KXuvn-gep8cjwaEVplNJQlLORxU02KLEZ_Z_4vjFtsKsgjPp_fnlvJYDHRcrVkBv07YJmkBA0L_PcdSsySEw4l8i0lHyTZ431SHcQ7-YN0ciWIq5ZZbboR6A-_axsPJh11OXWKTpkBvlf8I6zLzn-pDlN1bVxbgIV2_RQ2KU_8pr9a-kcjRdssrO7W/s421/pic-selected-240913-1924-20.png", alt="Screenshot")}}

Again press `:` to go explore mode `Ex`
and go to previous directory `../`  where our first file created 

open that file `~/.config/nvim/init.lua` and type this 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT6b3sAVAiFr1U1ppFdb-bByHxALCEixxo3sBAMnEcAW4SJoOgChureVhKI9cAOE4hdhrWbgiC5xIqG1mguQRwYt73-NLjELafCnbrnj6cwsuau2QNjlG6HfLFCUeJy7ehN8BSHinkkUgmUy0LTEdAY1XxD73IKWOTeStmkPPrtPltedD-9M_HZ-qImK7J/s437/pic-selected-240913-2120-00.png", alt="Screenshot")}}

now exit from nvim by pressing `:wq`

Again open nvim 

pwd :- ~/.config/nvim
```
nvim .
```
A message like this will show when you open nvim 

congrats if this type of  message will shows so you go further and lets make nvim usable.
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYrqlA4oWINyvo_eBhS9rQhy0Hyxje-okrf72B1grUz9KcNLu-OHtkUEa6reFmY5QtY3PadNvt-8rX_fq9lxQjxBB8l9IA04sapSjgAZvvPigHQBX_vYbEsDl_Cy3MjOjgyCiiUEeCmJnxrTqGfDOCuBdy3JkTTBr4IuFnGEMpNRJvfpLIearaiJKDPxB-/s566/pic-selected-240913-2125-02.png", alt="Screenshot")}}

#### Creating some shortcuts

Now lets make some shortcuts
first you have to create a remap.lua file in 
~/.config/nvim/lua/soul/remap.lua

here `vim.g.leader` is name where you can assign a keybutton

in second line you can see `vim.keymap.set` is used for set keyboard shortcuts of vim command

here we can directly execute this command  `Ex` by `spacebar pv`


{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkIWoYFI1FDCInDmElLLTNXJg5RMNWMcl9lr5fyd2hkMuc9JgP455kQ5o-vDAfumfGmkp6vkN4lsOAYMPJUOOnVJmLUCGc2rVNvS30WZggCV56L1XGMgLT_tBNO7of3YWbSKnTIGPkNhxcs3CVUEcaXtzVmso30lxwH2nSVH_u72Wz5wyiLg6HeyBQMNKe/s722/pic-selected-240913-2136-46.png", alt="Screenshot")}}

save this file `:w`

after press `:so` hit Enter (it will complie the source) 
now you can press `spacebar pv`

here when you exit from nvim you have to complie again 
so to solve this problem
we have to type this in our init.lua

pwd:- ~/.config/nvim/lua/soul/init.lua


{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUOFsyOZKl6t6RgG0Husli4wsPs3SQ-x0RuOLF8usuHSbk-5qqaL1Lgjv5VsCPvSihfZK8op-EHFw2YdaZBkiE0ITJXQRCCPzA80pNNQn1iGaxKbFtLQ6xVVDLg4hkj_Vyz2mHRbQsDMv2v3IUxJaMQYwwrd1lbkj5JBGQTDlyrH4ks-1I-bGXP8RMUoRa/s722/pic-selected-240913-2204-18.png", alt="Screenshot")}}


Now you everytime you open your nvim it will compile automatically


#### Add pulgin-manger(packer)
Go to this repo [packer.nvim](https://github.com/wbthomason/packer.nvim)

clone this repo in your ~/.config

```bash
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

Now copy this from that repo 
```lua
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
  -- Packer can manage itself
  use 'wbthomason/packer.nvim'
end)
```
paste it in 
~/.config/nvim/lua/soul/packer.lua

now complie it `:so`

now can able to type this `:PackerSync`
it will look like this 

if the option is not available you  can restart your nvim and recomplie it .

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh375U-HZtX-coZhrI3CWI-Js40-XB3U4NZs98O2rFTKdEcesOj7uu1o3U5vWleZgWs5M5ElorMuVQYJ-PeLND3yImfUfsnZ9ODEz0gQQRHHO6DTQiN7UcZTCxWtAlcjQBuxXHr0O6P4XXVoQZHRxeiGAXnchpmbhA9l7Bn2U4vHo465XCjjJzfrYp19pO/s1364/pic-window-240913-2238-51.png", alt="Screenshot")}}

congrats you come this far you have succesfully installed pulgin-manger.

##### Add Pulgin(fuzzy finder)
Now lets add some pulgin

go to repo [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)

copy this from that repo
```lua
use {
  'nvim-telescope/telescope.nvim', tag = '0.1.8',
-- or                            , branch = '0.1.x',
  requires = { {'nvim-lua/plenary.nvim'} }
}
```
paste in your packer.lua
it should be look like this 
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYndla32ASmdYaPT8Hei_O37y4CWg60XD-Iq3T3e_-_6NYKpYTqsh2pc8YN7wc_XG7dgKnQ_iX6y5EkBxmHAn2KM-cpeKE31BElAb0P1hxtYo3_kO1lkUOGrU8doI3ozwy7tIHtSzmK2kLpkpgj0EKQG2zFnfMS_gnkhVQE6Mog12IdVM-SclNdXx5ndvl/s617/pic-selected-240913-2258-47.png", alt="Screenshot")}}


Now press `:w`, `:so` and after that `:PackerSync`
it will start to install that pulgin 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihJpdFhxgTfc0yMf4doskm_O3ow39JywjDig4GljqgfXrRcFOHouxfLts4TNX3t-pki0FbA-_miGjCY7XfuMsNISkFvd7SQSvo2O3o8K01vz3X470k64m3HUj_Lleity-hWBDM1kPhyphenhyphenZ_N-AHWhr4vbPQYOtOSnri4iWxUz9nlOBqgT_q44Zkgg7X7OpPm/s1364/pic-window-240913-2302-39.png", alt="Screenshot")}}


Now copy this line 
paste it in  ~/.config/nvim/after/pulgin/telescope.lua
here create respective directory

```lua
local builtin = require('telescope.builtin')
vim.keymap.set('n', '<leader>pf', builtin.find_files, {})
vim.keymap.set('n', 'C-p', builtin.git_files, {})
vim.keymap.set('n', '<leader>ps', function()
	builtin.grep_string({ search = vim.fn.input("Grep > ")});
end)
```
Now press `:w` `:so`

now you can use fuzzy finder 
press `spacebar pf or ps`

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZmYnHq8oVAFiA4PIhNFusfq1XP2EeWEdXAJSHLkrjEK8-mLU2SpM1N0_-UCAhCXVSG-WfhibauYrrn-fxgxQY48WxW-qyeW8YMJ2nP6qh3Eha6TX1oHmPjt69pL-GLpaXNwVtUZfZyFsnN4N3kS8dMt8iWcG4-rEcrh8yvvmWSQTzHeumTqpIxlfxug0-/s1364/pic-window-240913-2355-48.png", alt="Screenshot")}}

##### Add pulgin (Rosé Pine)

Now go to this repo [Rosé Pine](https://github.com/will/rose-pine-neovim)

copy this line 
paste it in ~/.config/nvim/lua/soul/packer.lua

```lua
use({ 'rose-pine/neovim', as = 'rose-pine' })

vim.cmd('colorscheme rose-pine')
```
Now you can change it colorschema `:coloschema rose-pine-main`


{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgejqL4HwbMUBTGYfUMEqH5z7FfGzzfszcrfdyqJb4bnlt9XjdX11z7LfPIifCg7zudPcvF9GifS0E35o1uCSVJxFuO_HjUWNO96nWBr2Xn4q2oGoo9fyDrEqGdEaG5A2wkZ2MSwDKSGru7mmB2FRPhQtrkqrIybQAuHhfQYdqCRFf7vXUGCCiCrU7z-Nth/s1364/pic-window-240914-0003-57.png", alt="Screenshot")}}


#### Transparent Background

here i want traspraent background

create a file colors.lua
at ~/.config/nvim/after/pulgin/colors.lua

```lua
function ColorMyPencils(color)
            color = color or "rose-pine"
            vim.cmd.colorscheme(color)
            vim.api.nvim_set_hl(0,"Normal",{bg = "none"})
            vim.api.nvim_set_hl(0,"NormalFloat",{bg = "none"})
end

ColorMyPencils()
```

After transparenting  background .
it will look beautiful `><`.

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOsNuiNiR_5Veu1EeTXOMG7VpQyxUUZS2QHeTzo24faCL6KEfAyjYuKglYez31zHjxtAh_n13I9cKNDOnFJQLGK5bmQVe_VAa6vYorLG4eCpRhxYmUIy7CEWH54yZLw9RzQG2ceSDzFnHS1WnaqMkeJTrGUEpqFDuTYPyL4LNC97rM-WlDsM47w8wD5yyF/s1365/pic-selected-240914-1406-41.png", alt="Screenshot")}}

#### Add tree sitter
Add this line in your packer.lua
```lua
use( 'nvim-treesitter/nvim-treesitter', { run = ':TSUpdate'})
```
Save the file `:w` and comple it `:so` and run Packer `:PackerSync`

copy this line and paste it in
~/.config/nvim/after/pulgin/tree-sitter.lua

```lua
require'nvim-treesitter.configs'.setup {
  -- A list of parser names, or "all" (the listed parsers MUST always be installed)
  ensure_installed = { "c", "lua", "vim", "vimdoc", "query", "markdown", "markdown_inline", "javascript", "rust", "typescript"  },

  -- Install parsers synchronously (only applied to `ensure_installed`)
  sync_install = false,

  -- Automatically install missing parsers when entering buffer
  -- Recommendation: set to false if you don't have `tree-sitter` CLI installed locally
  auto_install = true,
  highlight = {
    enable = true,
    -- Setting this to true will run `:h syntax` and tree-sitter at the same time.
    -- Set this to `true` if you depend on 'syntax' being enabled (like for indentation).
    -- Using this option may slow down your editor, and you may see some duplicate highlights.
    -- Instead of true it can also be a list of languages
    additional_vim_regex_highlighting = false,
  },
}
```
Save the file `:w` and comple it `:so` 

Add this line in your packer.lua
```lua
use( 'nvim-treesitter/playground')
```
Save the file `:w` and comple it `:so` and run packer `PackerSync`

you can able to run `:TSPlaygroundToggle`

#### Add harrpon

Add this line in you Packer
```lua
use( 'ThePrimeagen/harpoon')
```
same as above

Now create a file harpoon.lua
at ~/.config/nvim/after/harpoon.lua
paste this 
```lua 
local mark = require("harpoon.mark")
local ui = require("harpoon.ui")
vim.keymap.set("n", "<leader>a", mark.add_file)
vim.keymap.set("n", "<leader>as", ui.toggle_quick_menu)

vim.keymap.set("n", "<C-a>", function () ui.nav_file(1) end)
vim.keymap.set("n", "<C-s>", function () ui.nav_file(2) end)
vim.keymap.set("n", "<C-u>", function () ui.nav_file(3) end)
vim.keymap.set("n", "<C-i>", function () ui.nav_file(4) end)
```
and save it and complie it 
Now can switch one file to another very fast

Here How ?

when i press `spacebar a` means to add  file in nav
now press `spacebar pf` serach file you want to access and go to that file and 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcP_RVinVABBKu0SGZlujBo_Q23zkXH8HVQDQ2OKUDblsV4wnF12o3twD_BeGHrUTx3lBY5FNTwVIGn5vndjd68MY7NX3D3llE8bLmHwn52PyMJAWP9M-qiLBm873TiwvL5T4E-jdIa2G-cv7M_wNgQv7WZ3_RQn89nemPZVgMTCXj_byvkmyW1kwTLt5F/s1366/pic-window-240914-1648-01.png", alt="Screenshot")}}

press `spacebar a` now press `spacebar as` now and see two file that you selected 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2xPB2PCKSyBSns_7B_oul-uwHJ47D7RgN2RW-mqKCFVs6aAOt6pMzLqjJ0qpPZH3qPpsHwb00YSCBtV5yoN0Q1MXr2Xsah0EidZBbXJnB-Ulls-D1VQms6yI5Y7e4FUorI8nLiJ6yjk07nwE9dQQFcnRz2i45d8fsFMszRdUy-hGv4nUjcDi6nJrp24Sp/s1363/pic-selected-240914-1652-13.png", alt="Screenshot")}}

now you can switch using `Ctrl + a` and `Ctrl + s` and thats very quick

or you can use `spacebar as` to switch

#### Add undotree

add this line in your packer
```lua
use ('mbbill/undotree')
```
then save it and complie it 

now create a file undotree.lua
~/.config/nvim/after/plugin/undotree.lua
```lua
vim.keymap.set('n', '<leader>u', vim.cmd.UndotreeToggle)
```
save this file and complie it 

#### Conclusion

Hope this helps you to understand who things works 
I also want to add lsp but i still confuse how to configure so if i fully understand then i will update it.

I try my best to make things simple 
see you in another blog :)

