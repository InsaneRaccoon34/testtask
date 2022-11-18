import {useRouter} from "next/router";

// @ts-ignore
const Id = () => {
    const router = useRouter();
    console.log('query id: ', router.query)

    return(
        <div>
            PLACEHOLDER id = {router.query.id}
        </div>
    )
}

export default Id;
