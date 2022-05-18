export default function UnorderedList(props) {
    return (
        <ul className={props.className ? props.className + ' ml-4 list-disc' : 'ml-4 list-disc'}>
            <div className="ml-4">
                {props.children}
            </div>
        </ul>
    )
}