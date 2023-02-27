export default function DummyText() {
    return (
        <div className="dummy-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, qui modi ab iusto magni nemo velit quis a earum, odit mollitia soluta similique vero laboriosam libero. Et sint iste repellendus consequatur nam sunt, cumque facere, enim libero natus quasi eum possimus laboriosam inventore tenetur sequi voluptas doloremque illo ab magnam consectetur aperiam voluptate odio.</div>
    )
}

export function DummyTextGroup() {
    return (
        <div className="dummy-text-group">
            <DummyText />
            <DummyText />
        </div>
    )
}