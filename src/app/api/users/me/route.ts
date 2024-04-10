import { NextRequest, NextResponse } from "next/server";


export async function Get(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({ _id: userId }).select("-password")
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}