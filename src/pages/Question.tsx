import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { getResolvedQuestion } from "../question-bank/repository";
import { getChapterQuestionPath, pagePaths } from "../routes/pageRoutes";
import { Badge, Button, Card, Progress } from "../ui";

export function Question() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { chapterId, questionId } = useParams();
    const language = i18n.resolvedLanguage ?? i18n.language;
    const resolvedQuestion =
        chapterId && questionId ? getResolvedQuestion(chapterId, questionId, language) : null;
    const [selected, setSelected] = useState<"A" | "B" | "C" | "D" | null>(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setSelected(null);
        setSubmitted(false);
    }, [chapterId, questionId, language]);

    if (!resolvedQuestion) {
        return (
            <div className="not-found">
                <h1>{t("questionMissingTitle")}</h1>
                <p>{t("questionMissingSubtitle")}</p>
                <Button onClick={() => navigate(pagePaths.home)}>{t("questionBack")}</Button>
            </div>
        );
    }

    const optionKeys: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];
    const progressValue = Math.round(((resolvedQuestion.index + 1) / resolvedQuestion.total) * 100);
    const isCorrect = submitted && selected === resolvedQuestion.correctOption;
    const nextQuestionId = resolvedQuestion.nextQuestionId;

    return (
        <div className="question-page">
            <div className="question-page__header">
                <div>
                    <Badge variant="primary">{t("questionBadge")}</Badge>
                    <h1>{t("questionTitle", { id: resolvedQuestion.index + 1 })}</h1>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate(pagePaths.home)}>
                    {t("questionBack")}
                </Button>
            </div>

            <div className="question-page__content">
                <Card
                    title={resolvedQuestion.prompt}
                    // title={t("questionCardTitlePage")}
                    // subtitle={t("chapterQuestionCount", { count: resolvedQuestion.total })}
                    // subtitle={t("questionCardTitlePage")}
                >
                    <div className="option-grid">
                        {optionKeys.map(optionKey => (
                            <Button
                                key={optionKey}
                                variant={selected === optionKey ? "secondary" : "outline"}
                                className="option-button"
                                onClick={() => {
                                    setSelected(optionKey);
                                    setSubmitted(false);
                                }}
                            >
                                {optionKey}. {resolvedQuestion.options[optionKey]}
                            </Button>
                        ))}
                    </div>
                    <div className="question-page__actions">
                        <Button
                            disabled={!selected || submitted}
                            onClick={() => setSubmitted(true)}
                        >
                            {t("questionSubmit")}
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setSelected(null);
                                setSubmitted(false);
                            }}
                        >
                            {t("questionReset")}
                        </Button>
                        {submitted && nextQuestionId ? (
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    navigate(
                                        getChapterQuestionPath(
                                            resolvedQuestion.chapterId,
                                            nextQuestionId,
                                        ),
                                    )
                                }
                            >
                                {t("questionNext")}
                            </Button>
                        ) : null}
                    </div>
                    {submitted ? (
                        <p className="question-page__note">
                            {isCorrect ? t("questionCorrect") : t("questionIncorrect")}
                            {" · "}
                            {t("questionAnswerLabel", { answer: resolvedQuestion.correctOption })}
                            {" · "}
                            {resolvedQuestion.explanation}
                        </p>
                    ) : null}
                </Card>

                <Card title={t("questionProgressTitle")} subtitle={t("questionProgressSubtitle")}>
                    <Progress value={progressValue} label={t("questionProgressLabel")} />
                    <p className="question-page__note">
                        {t("questionProgressNote", {
                            current: resolvedQuestion.index + 1,
                            total: resolvedQuestion.total,
                        })}
                    </p>
                    {!nextQuestionId ? (
                        <Button variant="secondary" onClick={() => navigate(pagePaths.home)}>
                            {t("questionCompleteBack")}
                        </Button>
                    ) : null}
                </Card>
            </div>
        </div>
    );
}
