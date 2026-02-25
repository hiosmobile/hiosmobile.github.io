export default function WrapperPage({ src, title }) {
    return (
        <iframe
            src={src}
            title={title}
            style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
            }}
        />
    );
}