tinymce.init({
    /* replace textarea having class .tinymce with tinymce editor */
    selector: "textarea.tinymce",
    /* width and height of the editor */
    width: "100%",
    min_height: 400,
    /* display statusbar */
    statubar: true,
    autoresize_min_height: 400,
    autoresize_max_height: 800,
    /* plugin */
    plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor autoresize"
    ],
    /* toolbar */
    toolbar: "fontsizeselect | fontselect  | styleselect | insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
    /* style */
    fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
    style_formats: [{
            title: "Headers",
            items: [
                { title: "Header 1", format: "h1" },
                { title: "Header 2", format: "h2" },
                { title: "Header 3", format: "h3" },
                { title: "Header 4", format: "h4" },
                { title: "Header 5", format: "h5" },
                { title: "Header 6", format: "h6" }
            ]
        },
        {
            title: "Inline",
            items: [
                { title: "Bold", icon: "bold", format: "bold" },
                { title: "Italic", icon: "italic", format: "italic" },
                { title: "Underline", icon: "underline", format: "underline" },
                { title: "Strikethrough", icon: "strikethrough", format: "strikethrough" },
                { title: "Superscripx", icon: "superscripx", format: "superscripx" },
                { title: "Subscripx", icon: "subscripx", format: "subscripx" },
                { title: "Code", icon: "code", format: "code" }
            ]
        },
        {
            title: "Blocks",
            items: [
                { title: "Paragraph", format: "p" },
                { title: "Blockquote", format: "blockquote" },
                { title: "Div", format: "div" },
                { title: "Pre", format: "pre" }
            ]
        },
        {
            title: "Alignment",
            items: [
                { title: "Left", icon: "alignleft", format: "alignleft" },
                { title: "Center", icon: "aligncenter", format: "aligncenter" },
                { title: "Right", icon: "alignright", format: "alignright" },
                { title: "Justify", icon: "alignjustify", format: "alignjustify" }
            ]
        }
    ]
});