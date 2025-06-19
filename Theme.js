

const myTheme = {
    base: 'vs-dark', // Specify the base theme (e.g., 'vs', 'vs-dark', 'hc-black')
    inherit: true, // Inherit rules from the base theme
    rules: [
        { token: 'comment', foreground: 'green', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'blue', fontStyle: 'bold' },
        { token: 'string', foreground: 'red' },
    ],
    colors: {
        'editor.background': '#1e1e1e', // Set the background color of the editor
        'editorLineNumber.foreground': '#999999', // Set the color of line numbers
    },
};

export default myTheme;
