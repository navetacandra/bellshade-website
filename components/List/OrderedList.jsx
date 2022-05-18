export default function OrderedList(props) {
    return (
        <ol className={props.className ? props.className + ' ml-4 list-decimal' : 'ml-4 list-decimal'}>
            <div className="ml-4">
                {props.children}
            </div>
        </ol>
    )
}